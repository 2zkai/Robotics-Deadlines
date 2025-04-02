const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// 设置静态文件目录
app.use(express.static('src/public'));

// 将所有路由重定向到index.html以支持SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 启动服务器（仅用于本地开发）
app.listen(port, () => {
  console.log(`静态Robotics-Deadlines站点运行在 http://localhost:${port}`);
});