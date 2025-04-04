markdown
# DIMD-Training

## 名字由来

仓库命名为 **DIMD-Training**，其中 "DIMD" 是 Digital Interaction Media Design 的缩写，代表了数字交互媒体设计这一领域。而 "Training" 则明确指出此仓库的主要用途是用于存储该赛项选手日常训练的项目资料[ty-reference](4)。这样的命名方式不仅简洁易懂，而且能够直接反映出仓库的核心功能与目的。

## 仓库介绍

本仓库旨在为参与数字交互媒体设计竞赛的选手提供一个集中的平台，用以分享和交流日常训练成果。通过这种方式，促进选手之间的相互学习，提高整体水平，并为即将到来的比赛做好充分准备。

## 文件组织结构

为了保持仓库的整洁和有序性，我们采用了以下的文件架构：
```
DIMD-Training/ 
│ 
├── README.md # 仓库的总体介绍 
├── .gitignore # Git忽略文件列表 
├── CONTRIBUTING.md # 贡献指南文档 
├── LICENSE # 开源许可证 
└── projects/ # 所有项目的根目录 
├── 250310-CrazyAnimals-First/ 
│ 
├── assets/ # 存放项目资源文件，如图片、视频等 
│ 
├── src/ # 源代码或主要项目文件 
│ 
└── README.md # 本项目的说明文档 
└── ...
```
每个具体的项目都应该遵循上述的结构，确保所有必要的组件都得到适当的分类和存放。

## 项目名称

### 疯狂动物

“疯狂动物”是一个基于HTML、CSS和JavaScript开发的H5小游戏。该项目旨在通过动画效果和交互设计提供一个有趣的游戏体验。

## 项目结构说明

### `index.html`

`index.html` 是项目的主页面，包含以下主要部分：
- **进度条**：显示加载进度。
- **背景动画**：包含两个动画元素 `#box` 和 `#box1`，以及随机位置的图案。
- **内容部分**：包含顶部、中间和底部的内容区域，每个区域都有一个 `id` 为 `p1` 的子元素。

### `index.css`

`index.css` 文件定义了项目的样式，包括：
- **基础样式**：设置 `html` 和 `body` 的基本样式。
- **页面布局**：定义 `#app`、`#page` 和其他容器的样式。
- **背景和动画**：定义背景图片、音乐按钮、动画效果等。
- **内容部分**：定义顶部、中间和底部内容区域的样式。

### `index.js`

`index.js` 文件包含项目的逻辑代码，包括：
- **进度条功能**：通过定时器增加进度条的宽度，并在达到100%时重置。
- **图案位置随机生成**：在页面加载时随机设置图案的位置。
- **隐藏和显示元素**：通过 `VisibilityAllP1Elements` 函数控制 `id` 为 `p1` 的元素的显示和隐藏。

## 主要功能

### 进度条

进度条显示页面加载的进度，每100毫秒增加3%，达到100%后重置并隐藏所有 `id` 为 `p1` 的元素。

### 背景动画

背景中包含两个动画元素 `#box` 和 `#box1`，它们在页面中以不同的速度和路径移动。动画效果通过 `@keyframes` 定义。

### 隐藏和显示元素

通过 `VisibilityAllP1Elements` 函数可以控制 `id` 为 `p1` 的元素的显示和隐藏。该函数接受两个参数：
- `id`：要控制的元素的 `id` 后缀（例如，`1` 对应 `#p1`）。
- `state`：布尔值，`true` 表示显示，`false` 表示隐藏。

#### 示例代码

```javascript
// 隐藏所有 id 为 p1 的元素
VisibilityAllP1Elements(1, false);
```
### 解释

1. **项目名称**：
   - 增加了“疯狂动物”项目名称，并简要描述了该项目的内容和功能。

2. **项目结构说明**：
   - 详细描述了 `index.html`、`index.css` 和 `index.js` 的功能和内容。

3. **主要功能**：
   - 描述了进度条、背景动画和隐藏/显示元素的功能。
   - 提供了 `VisibilityAllP1Elements` 函数的示例代码。

4. **贡献指南**：
   - 保持原有的贡献指南内容，确保贡献者了解如何正确贡献内容。