// 获取进度条元素
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-Text');
// 初始化进度条宽度
let progressWidth = 0;
// 增加进度的函数
function increaseProgress() {
    
    if (progressWidth < 100) {
        progressWidth += 1; // 每次增加1%
        progressBar.style.width = progressWidth + '%';
        
        console.log(progressWidth);
    } else {
        // 重置进度条宽度并重新开始
        progressWidth = 0;
        progressBar.style.width = progressWidth + '%';
    }
    progressText.innerText = "已加载"+progressWidth + '%';
}

// 定义定时器ID
let intervalId;

// 页面加载完成后启动进度条
window.onload = function() {

    // 设置定时器，每100毫秒调用一次increaseProgress函数
    intervalId = setInterval(increaseProgress, 100);
};