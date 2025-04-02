# Robotics-Deadlines

机器人学相关会议截稿日期倒计时系统 (Robotics Conference Deadline Countdown System)

## 功能特点

- 📅 实时显示各大机器人学会议的截稿倒计时
- 🔍 按研究领域分类展示会议信息
- 📱 响应式设计，支持移动端访问
- 🔄 动态更新倒计时显示
- 🌐 支持静态部署，零数据库依赖

## 快速开始

### 方法一：直接使用（静态网站）

1. 直接访问 [GitHub Pages地址](#) 即可查看最新的截稿信息

### 方法二：本地运行

1. 克隆仓库
```bash
git clone https://github.com/your-username/Robotics-Deadlines.git
cd Robotics-Deadlines
```

2. 使用任意静态网站服务器运行
```bash
npx serve src/public
```

访问 http://localhost:3000 即可查看应用

## 如何添加/更新会议

直接修改 `src/public/index.html` 文件中的 conferences 数组数据：

```javascript
let conferences = [
  {
    "id": 1,
    "name": "会议名称",
    "deadline": "截稿日期 (YYYY-MM-DDThh:mm:ss 格式)",
    "category": "分类 (strongly-robotics/somewhere-between/strongly-ai)",
    "ccf": "CCF分级 (A/B/C/N)",
    "description": "会议描述"
  },
  // 更多会议...
];
```

## 项目结构

```
Robotics-Deadlines/
├── src/
│   └── public/
│       ├── index.html   # 主页HTML和JavaScript
│       └── style.css    # 样式表
├── package.json
└── README.md
```

## 会议分类

- 与机器人强相关 (Strongly Related to Robotics)
- 交叉领域 (Somewhere Between)
- 与AI强相关 (Strongly Related to AI)

## 部署方式

详见 [DEPLOY.md](DEPLOY.md) 文档了解详细部署指南。
