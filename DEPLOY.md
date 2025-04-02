# 部署指南

本文档提供了将Robotics-Deadlines部署为静态网站的多种方法。

## 1. GitHub Pages

GitHub Pages是部署静态网站最简单的方法之一：

1. Fork本仓库
2. 进入仓库设置 -> Pages
3. 选择分支（通常为`main`或`master`）和目录（`/src/public`）
4. 点击保存，等待部署
5. 访问生成的GitHub Pages网址（通常为`https://<用户名>.github.io/Robotics-Deadlines/`）

## 2. Netlify

Netlify提供免费的静态网站托管服务，并支持自定义域名：

1. 注册Netlify账号
2. 点击"New site from Git"
3. 选择你的Git提供商并授权
4. 选择Robotics-Deadlines仓库
5. 设置：
   - 构建命令：留空
   - 发布目录：`src/public`
6. 点击"部署网站"

## 3. Vercel

Vercel类似于Netlify，也提供免费托管和自动部署：

1. 注册Vercel账号
2. 导入项目
3. 配置项目：
   - 框架预设：选择Other
   - 构建命令：留空
   - 输出目录：`src/public`
4. 点击"部署"

## 4. 任何静态网站托管服务

由于项目现在是纯静态的，你可以将`src/public`目录中的内容上传到任何支持静态网站的服务，例如：

- AWS S3 + CloudFront
- Google Firebase Hosting
- Microsoft Azure Static Web Apps

## 5. 自定义会议数据

如需更新会议数据，修改`src/public/index.html`文件中的conferences数组：

```javascript
let conferences = [
  {
    "id": 1,
    "name": "新会议名称",
    "deadline": "2024-06-15T23:59:59",
    "category": "strongly-robotics",
    "ccf": "A",
    "description": "会议描述"
  },
  // 更多会议...
];
```

修改后重新部署即可更新会议信息。
