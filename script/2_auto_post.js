/**
 * 题目2：编辑文本，进行自动发帖。
 */

auto.waitFor();
app.launchApp("小红书");
sleep(5000);

// 1. 点击底部发布按钮
clickPublishEntry();
sleep(2000);

// 2. 选择内容（文字或图片）
selectContent();

// 3. 流程操作：多次点击下一步/发布，中间穿插文本输入
// 第一次点击下一步（或右上角）
clickButtonOrCorner("下一步");

// 输入文本
var content = "今日份的快乐分享！#生活 #正能量";
sleep(2000);
setText(content);
sleep(2000);
toast("文本已输入");

// 第二次点击下一步
clickButtonOrCorner("下一步");

sleep(10000);

// 第三次点击下一步
clickButtonOrCorner("下一步");

sleep(2000);

// 点击发布笔记
clickButtonOrCorner("发布笔记");


// --- 辅助函数 ---

function clickPublishEntry() {
    var publishBtn = desc("发布").findOne(3000);
    publishBtn.click();
}

function selectContent() {
    var textTab = text("写文字").findOne(2000);
    textTab.click();
    sleep(1000);
}

function clickButtonOrCorner(btnText) {
    var btn = text(btnText).findOne(3000);
    btn.click();
    toast("已点击发布");
}