const express = require('express');
const database = require('./database');
const app = express();
const port = 3000;

// 设置静态文件目录
app.use(express.static('src/public'));
app.use(express.json());

// 获取所有会议数据
app.get('/api/conferences', (req, res) => {
  database.getConferences((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(rows);
    }
  });
});

// 添加新会议
app.post('/api/conferences', (req, res) => {
  const { name, deadline, category } = req.body;
  database.addConference(name, deadline, category, (err, row) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(201).json(row);
    }
  });
});

// 更新会议分类
app.put('/api/conferences/:id/category', (req, res) => {
  const { id } = req.params;
  const { category } = req.body;
  database.updateConferenceCategory(id, category, (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json({ message: '分类更新成功' });
    }
  });
});

// 启动服务器
app.listen(port, () => {
  console.log(`Robotics-Deadlines server is running at http://localhost:${port}`);
});