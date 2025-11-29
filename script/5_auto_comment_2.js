 var comments = [  
    "加油，主播最棒！",  
    "坚持下去，梦想就在前方！",  
    "每一次直播都是成长的见证！",  
    "相信自己，你一定能行！",  
    "主播的笑容是我的动力源泉！",  
    "看得出来主播很用心，支持一下！",  
    "满满的正能量，让人忍不住点赞！",  
    "主播的努力我们都看在眼里，加油！",  
    "每一个努力的人都值得被尊重！",  
    "今天的直播比昨天更精彩了！",  
    "主播的才华和努力让我深受启发！",  
    "看到主播这么努力，我也要加油了！",  
    "正能量满满，主播你是我的榜样！",  
    "直播间的氛围真好，让人心情愉悦！",  
    "主播的坚持和努力让我感动！",  
    "支持正能量主播，传递爱与温暖！",  
    "主播的每一次进步都值得庆祝！",  
    "看着主播成长，真的很开心！",  
    "主播的直播总是让我充满力量！",  
    "努力的人最美，主播加油！",  
    "主播的乐观和积极感染了我！",  
    "今天的你比昨天更优秀了，主播！",  
    "直播间里充满了正能量，感谢主播！",  
    "主播的每一场直播都让我受益匪浅！",  
    "坚持自己的梦想，主播你是最棒的！",  
    "主播的正能量让我每天都充满期待！",  
    "看到主播的笑容，一天的疲惫都消失了！",  
    "主播的才华和努力值得被更多人看到！",  
    "支持正能量，主播加油，我们与你同在！",  
    "主播的每一次尝试都让我敬佩不已！",  
    "正能量主播，让我们一起变得更加优秀！",  
    "主播的直播让我感受到了生活的美好！",  
    "看着主播的成长，我也变得更加有信心了！",  
    "主播的坚持和努力是我前进的动力！",  
    "主播的正能量让我每天都充满正能量！",  
    "支持主播，传递正能量，让世界更美好！",  
    "主播的每一次直播都让我收获满满！",  
    "正能量满满的主播，让我每天都充满希望！",  
    "主播的乐观和积极让我深受鼓舞！",  
    "看着主播的努力，我也愿意变得更加努力！",  
    "主播的直播让我感受到了团队的力量！",  
    "正能量主播，让我们一起为梦想加油！",  
    "主播的每一次尝试都让我看到了无限可能！",  
    "支持正能量，主播你是我们心中的光芒！"  
];
// --- 主程序 ---

// 循环发送随机评论
for (var i = 0; i < comments.length; i++) {
    var randomInt = Math.floor(Math.random() * comments.length);
    sendComment(comments[randomInt]);
}


// --- 辅助函数 ---

function sendComment(comment) {
    click("说点什么");
    sleep(1000);

    // 模拟真人输入逻辑
    if (comment.length > 4) {
        simulateHumanTyping(comment);
    }

    // 确保最终输入完整
    setText(comment);
    sleep(1000);

    click("发送");
    sleep(2000 + Math.random() * 1000);
}

function simulateHumanTyping(comment) {
    // 1. 输入部分内容 (50%-90%)
    var partLen = Math.floor(comment.length * (0.5 + Math.random() * 0.4));
    var part1 = comment.substring(0, partLen);
    setText(part1);
    sleep(500 + Math.random() * 500);

    // 2. 模拟删除 (1-3个字符)
    var delCount = Math.floor(Math.random() * 3) + 1;
    if (delCount >= part1.length) delCount = part1.length - 1;

    var part2 = part1.substring(0, part1.length - delCount);
    setText(part2);
    sleep(300 + Math.random() * 300);
}  