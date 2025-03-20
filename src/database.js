const sqlite3 = require('sqlite3').verbose();

// 创建 SQLite 数据库并创建表
const db = new sqlite3.Database('./roboddl.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    db.run(`CREATE TABLE IF NOT EXISTS conferences (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      deadline TEXT NOT NULL,
      category TEXT NOT NULL
    )`);
  }
});

// 获取所有会议数据
function getConferences(callback) {
  db.all('SELECT * FROM conferences', [], (err, rows) => {
    callback(err, rows);
  });
}

// 添加新会议
function addConference(name, deadline, category, callback) {
  db.run('INSERT INTO conferences (name, deadline, category) VALUES (?, ?, ?)', 
    [name, deadline, category], 
    function(err) {
      callback(err, { id: this.lastID, name, deadline, category });
    });
}

// 更新会议分类
function updateConferenceCategory(id, category, callback) {
  db.run('UPDATE conferences SET category = ? WHERE id = ?', 
    [category, id], 
    function(err) {
      callback(err);
    });
}

module.exports = {
  getConferences,
  addConference,
  updateConferenceCategory
};