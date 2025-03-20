const express = require('express');
const database = require('./database');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('src/public'));
app.use(express.json());

// 获取所有会议数据
app.get('/api/conferences', async (req, res) => {
  try {
    const conferences = await database.getConferences();
    res.json(conferences);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 添加新会议
app.post('/api/conferences', async (req, res) => {
  try {
    const { name, deadline, category } = req.body;
    const conference = await database.addConference(name, deadline, category);
    res.status(201).json(conference);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 更新会议分类
app.put('/api/conferences/:id/category', async (req, res) => {
  try {
    const { id } = req.params;
    const { category } = req.body;
    const conference = await database.updateConferenceCategory(id, category);
    res.json(conference);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});