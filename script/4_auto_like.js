/**
 * 题目4：自由设计小红书直播间自动点赞功能 (悬浮窗版)
 */

auto.waitFor();

var thread = null;
var clickDelay = 100;
var isRunning = false;

// 1. 创建悬浮窗 UI
var w = createFloatWindow();

// 2. 初始化位置
w.setPosition(device.width / 2 - 300, device.height / 4);

// 3. 绑定事件
bindEvents(w);

// 4. 保持脚本运行
setInterval(() => {}, 1000);


// --- 核心逻辑与辅助函数 ---

function createFloatWindow() {
    return floaty.window(
        <card cardCornerRadius="10dp" cardElevation="5dp" bg="#ffffff" w="220dp" h="auto" alpha="0.9">
            <vertical padding="10">
                <horizontal gravity="center_vertical">
                    <text id="title" text="直播点赞助手" textSize="14sp" textStyle="bold" layout_weight="1" textColor="#ff2442"/>
                    <text id="move" text="✥" textSize="18sp" padding="5" textColor="#999999"/>
                    <text id="closeBtn" text="✕" textSize="16sp" padding="5 5 0 5" textColor="#999999" marginLeft="10"/>
                </horizontal>
                
                <horizontal marginTop="5">
                    <text text="速度:" textSize="12sp" textColor="#333333"/>
                    <text id="speedText" text="100ms" textSize="12sp" textColor="#ff2442" marginLeft="5"/>
                </horizontal>
                <seekbar id="speedBar" max="1000" progress="100" h="20dp" margin="0 5"/>
                
                <button id="actionBtn" text="开始点赞" h="35dp" textSize="14sp" bg="#ff2442" textColor="#ffffff" marginTop="5"/>
            </vertical>
        </card>
    );
}

function bindEvents(win) {
    // 退出脚本
    win.closeBtn.click(() => {
        stopLikeThread();
        win.close();
        exit();
    });

    // 速度控制
    win.speedBar.setOnSeekBarChangeListener({
        onProgressChanged: function(seekBar, progress, fromUser) {
            clickDelay = progress + 10;
            win.speedText.setText(clickDelay + "ms");
        }
    });

    // 开始/停止按钮
    win.actionBtn.click(() => {
        if (isRunning) {
            stopLikeThread();
            updateBtnState(win, false);
        } else {
            startLikeThread();
            updateBtnState(win, true);
        }
    });

    // 悬浮窗拖动
    bindMoveEvent(win);
}

function startLikeThread() {
    isRunning = true;
    thread = threads.start(function() {
        try {
            toast("开始自动点赞");
            while (true) {
                // 随机点击屏幕右侧中间区域
                var x = device.width * (0.7 + Math.random() * 0.1);
                var y = device.height * (0.5 + Math.random() * 0.2);
                
                // 双击点赞
                click(x, y);
                sleep(50);
                click(x, y);
                
                sleep(clickDelay);
            }
        } catch (e) {
            // 线程中断
        }
    });
}

function stopLikeThread() {
    if (thread) {
        thread.interrupt();
        thread = null;
    }
    isRunning = false;
    toast("已停止");
}

function updateBtnState(win, running) {
    if (running) {
        win.actionBtn.setText("停止运行");
        win.actionBtn.attr("bg", "#dddddd");
        win.actionBtn.attr("textColor", "#333333");
    } else {
        win.actionBtn.setText("开始点赞");
        win.actionBtn.attr("bg", "#ff2442");
        win.actionBtn.attr("textColor", "#ffffff"); // 恢复白色字体
    }
}

function bindMoveEvent(win) {
    var x = 0, y = 0;
    var windowX, windowY;
    
    win.move.setOnTouchListener(function(view, event) {
        switch (event.getAction()) {
            case event.ACTION_DOWN:
                x = event.getRawX();
                y = event.getRawY();
                windowX = win.getX();
                windowY = win.getY();
                return true;
            case event.ACTION_MOVE:
                win.setPosition(windowX + (event.getRawX() - x),
                    windowY + (event.getRawY() - y));
                return true;
            case event.ACTION_UP:
                return true;
        }
        return true;
    });
}
