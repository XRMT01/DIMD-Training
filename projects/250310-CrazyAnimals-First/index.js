// 获取进度条元素
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-Text');
// 初始化进度条宽度
let progressWidth = 0;

// 位置
let Hmax = 520;
let Hmin = 0;
let Wmax = 320;
let Wmin = 0;
// 增加进度的函数
function increaseProgress() {
    
    if (progressWidth < 100) {
        progressWidth += 3; // 每次增加1%
        progressBar.style.width = progressWidth + '%';
        
        //console.log(progressWidth);
    } else {
        // 重置进度条宽度并重新开始
        progressWidth = 0;
        progressBar.style.width = progressWidth + '%';
        clearInterval(intervalId);
        VisibilityAllP1Elements(1,false)
    }
    progressText.innerText = "已加载"+progressWidth + '%';
}

// 定义定时器ID
let intervalId;

// 页面加载完成后启动进度条
window.onload = function() {

    // 设置定时器，每100毫秒调用一次increaseProgress函数
    intervalId = setInterval(increaseProgress, 100);

    patternPos();
};


// pattern位置随机生成
function patternPos(){
    for (let index = 1; index < 6; index++) {
        let id = document.getElementById("pattern-"+index);
        id.style.top = Math.random() * (Hmax - Hmin) + Hmin + 'px';
        id.style.left = Math.random() * (Wmax - Wmin) + Wmin + 'px';
    }
}
function randomPosition(min, max) {
    return Math.random() * (max - min) + min;
}


// 新增函数：隐藏所有 id 为 p1 的元素
function VisibilityAllP1Elements(id,state) {
    const p1Elements = document.querySelectorAll('#p'+id);
    p1Elements.forEach(element => {
        if(state){
            element.style.visibility = 'visible';
        }else{
            element.style.visibility = 'hidden';
        }
    });
}