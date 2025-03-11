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
let _index = 1;
// 增加进度的函数
function increaseProgress() {
    
    if (progressWidth < 100) {
        progressWidth += 5; // 每次增加1%
        progressBar.style.width = progressWidth + '%';
        
        //console.log(progressWidth);
    } else {
        // 重置进度条宽度并重新开始
        progressWidth = 0;
        progressBar.style.width = progressWidth + '%';
        clearInterval(intervalId);
        VisibilityAllElements(_index,false)
        _index++;
        VisibilityAllElements(_index,true)
        startImageAnimation();
    }
    progressText.innerText = "已加载"+progressWidth + '%';
}

// 定义定时器ID
let intervalId;

// 页面加载完成后启动进度条
window.onload = function() {

    // 设置定时器，每100毫秒调用一次increaseProgress函数
    intervalId = setInterval(increaseProgress, 100);
    for (let index = 1; index < 10; index++) {
        VisibilityAllElements(index,false)
    }
    VisibilityAllElements(_index,true)
    patternPos();


    // 按钮注册
    document.getElementById("p2_button").addEventListener("click", function() {
        VisibilityAllElements(_index,false)
        _index++
        VisibilityAllElements(_index,true)
    })
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


function VisibilityAllElements(id,state) {
    const p1Elements = document.querySelectorAll('#p'+id);
    p1Elements.forEach(element => {
        if(state){
            element.style.visibility = 'visible';
        }else{
            element.style.visibility = 'hidden';
        }
    });
}

// 启动图片动画
function startImageAnimation() {
    const albumItems = document.querySelectorAll('#centre #p2 #album #album-item #imgs');
    albumItems.forEach((img, index) => {
        img.classList.add('fade-in'+ index);
    });
    setTimeout(() => {
        albumItems.forEach((img, index) => {
            img.classList.remove('fade-in'+ index);
            img.classList.add('roate'+ index);
            img.addEventListener('animationend', () => {
                // 动画结束后调整 z-index
                if (index === 0) {
                    img.style.zIndex = 3;
                } else if (index === 1) {
                    img.style.zIndex = 2;
                } else if (index === 2) {
                    img.style.zIndex = 1;
                }
            });
        });
    }, 5000);
}