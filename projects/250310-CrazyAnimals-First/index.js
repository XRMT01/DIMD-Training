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


let pages = ["1","2","3-1","3-2","3-3","3-4","3-5"]
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
        VisibilityAllElements(pages[0],false)
        VisibilityAllElements(pages[1],true)
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
    pages.forEach(element => {
        VisibilityAllElements(element,false);
    });
    

    VisibilityAllElements(pages[0],true)
    patternPos();
    

    // 按钮注册界面二
    document.getElementById("p2_button").addEventListener("click", function() {
        VisibilityAllElements(pages[1],false);
        VisibilityAllElements(pages[2],true);
    })

    // 按钮注册界面3-1
    document.getElementById("p3-1_button").addEventListener("click", function() {
        VisibilityAllElements(pages[2],false);
        VisibilityAllElements(pages[4],true);
    })
    
    // 按钮规则
    document.getElementById("GameRule").addEventListener("click", function() {
        VisibilityAllElements(pages[2],false);
        VisibilityAllElements(pages[3],true);
    })

    // 规则关闭
    document.getElementById("p3-2_close").addEventListener("click", function() {
        VisibilityAllElements(pages[3],false);
        VisibilityAllElements(pages[2],true);
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
            playChildAnimations(element,state)
            element.style.visibility = 'visible';
        }else{
            playChildAnimations(element,state)
            element.style.visibility = 'hidden';
        }
    });
}

// P2 图片动画
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

// 播放子级所有动画
function playChildAnimations(parentElement,state) {
    const childElements = parentElement.querySelectorAll('*');
    childElements.forEach(childElement => {
        if(state){
            parentElement.style.animationPlayState = 'running';
            childElement.style.animationPlayState = 'running';
        }else{
            parentElement.style.animationPlayState = 'paused';
            childElement.style.animationPlayState = 'paused';
        }
    });
}