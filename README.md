# Robotics-Deadlines

机器人学相关会议截稿日期倒计时系统 (Robotics Conference Deadline Countdown System)

## 功能特点

- 📅 实时显示各大机器人学会议的截稿倒计时
- 🔍 按研究领域分类展示会议信息
- 📱 响应式设计，支持移动端访问
- 🔄 动态更新倒计时显示
- 💾 本地数据库存储会议信息

## 技术栈

- 前端：HTML5, CSS3, JavaScript
- 后端：Node.js, Express
- 数据库：SQLite3

## 快速开始

### 前置要求

- Node.js (v12.0.0 或更高版本)
- npm (v6.0.0 或更高版本)

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/your-username/Robotics-Deadlines.git
cd Robotics-Deadlines
```

2. 安装依赖
```bash
npm install
```

3. 初始化数据库（可选）
```bash
node src/init-data.js
```

4. 启动服务器
```bash
npm start
```

访问 http://localhost:3000 即可查看应用

## 项目结构

```
Robotics-Deadlines/
├── src/
│   ├── public/
│   │   ├── index.html
│   │   └── style.css
│   ├── server.js
│   ├── database.js
│   └── init-data.js
├── package.json
└── README.md
```

## 会议分类

- 与机器人强相关 (Strongly Related to Robotics)
- 交叉领域 (Somewhere Between)
- 与AI强相关 (Strongly Related to AI)

## API 接口

### GET /api/conferences
获取所有会议信息

### POST /api/conferences
添加新会议
```json
{
  "name": "会议名称",
  "deadline": "截稿日期",
  "category": "分类"
}
```

### PUT /api/conferences/:id/category
更新会议分类
```json
{
  "category": "新分类"
}
```

## 许可证

MIT License

## 作者

赵治凯 (Zhao Zhikai)