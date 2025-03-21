const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// 会议数据文件路径
const DATA_FILE = path.join(__dirname, 'data', 'conferences.json');

// 设置静态文件目录
app.use(express.static('src/public'));
app.use(express.json());

// 读取会议数据
function readConferences() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('读取会议数据错误:', err);
    return [];
  }
}

// 写入会议数据
function writeConferences(conferences) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(conferences, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('写入会议数据错误:', err);
    return false;
  }
}

// 获取所有会议数据
app.get('/api/conferences', (req, res) => {
  const conferences = readConferences();
  res.json(conferences);
});

// 添加新会议
app.post('/api/conferences', (req, res) => {
  const { name, deadline, category } = req.body;
  const conferences = readConferences();
  
  // 生成新ID
  const maxId = conferences.reduce((max, conf) => Math.max(max, conf.id), 0);
  const newConference = {
    id: maxId + 1,
    name,
    deadline,
    category
  };
  
  conferences.push(newConference);
  
  if (writeConferences(conferences)) {
    res.status(201).json(newConference);
  } else {
    res.status(500).send('保存会议数据失败');
  }
});

// 更新会议分类
app.put('/api/conferences/:id/category', (req, res) => {
  const { id } = req.params;
  const { category } = req.body;
  const conferences = readConferences();
  
  const conference = conferences.find(conf => conf.id === parseInt(id));
  if (!conference) {
    return res.status(404).send('会议未找到');
  }
  
  conference.category = category;
  
  if (writeConferences(conferences)) {
    res.status(200).json({ message: '分类更新成功' });
  } else {
    res.status(500).send('更新会议分类失败');
  }
});

// 启动服务器
app.listen(port, () => {
  // 确保数据目录存在
  const dataDir = path.join(__dirname, 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
  }
  
  // 如果数据文件不存在，创建一个空的
  if (!fs.existsSync(DATA_FILE)) {
    writeConferences([]);
  }
  
  console.log(`Robotics-Deadlines server is running at http://localhost:${port}`);
});