/**
 * 题目3：小红书自动滑屏切换直播间，快捷点赞、关注。
 */

auto.waitFor();

while (true) {
    toast("执行操作中...");

    // 1. 快捷点赞
    quickLike();
    sleep(2000);

    // 2. 关注主播
    followAnchor();
    sleep(3000);

    // 3. 切换直播间
    swipeToNext();
    sleep(5000); 
}


// --- 辅助函数 ---

function quickLike() {
    // 双击屏幕中心
    var x = device.width / 2;
    var y = device.height / 2;
    click(x, y);
    sleep(200);
    click(x, y);
    toast("已点赞");
}

function followAnchor() {
    var followBtn = text("关注").findOne(2000);
    if (followBtn) {
        followBtn.click();
        toast("已关注");
    }
}

function swipeToNext() {
    // 上滑切换
    var startX = device.width / 2;
    var startY = device.height * 0.8;
    var endX = device.width / 2;
    var endY = device.height * 0.2;
    
    swipe(startX, startY, endX, endY, 500);
    toast("切换下一个直播间");
}
