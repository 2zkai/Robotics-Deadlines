const { Pool } = require('pg');

// 创建 PostgreSQL 连接池
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://localhost:5432/robotics_deadlines',
  ssl: process.env.DATABASE_URL ? {
    rejectUnauthorized: false
  } : false
});

// 初始化数据库表
async function initDatabase() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS conferences (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        deadline TIMESTAMP NOT NULL,
        category VARCHAR(100) NOT NULL
      )
    `);
    console.log('数据库表创建成功');
  } catch (err) {
    console.error('初始化数据库失败:', err);
    throw err;
  }
}

// 获取所有会议数据
async function getConferences() {
  try {
    const result = await pool.query('SELECT * FROM conferences ORDER BY deadline');
    return result.rows;
  } catch (err) {
    console.error('获取会议数据失败:', err);
    throw err;
  }
}

// 添加新会议
async function addConference(name, deadline, category) {
  try {
    const result = await pool.query(
      'INSERT INTO conferences (name, deadline, category) VALUES ($1, $2, $3) RETURNING *',
      [name, deadline, category]
    );
    return result.rows[0];
  } catch (err) {
    console.error('添加会议失败:', err);
    throw err;
  }
}

// 更新会议分类
async function updateConferenceCategory(id, category) {
  try {
    const result = await pool.query(
      'UPDATE conferences SET category = $1 WHERE id = $2 RETURNING *',
      [category, id]
    );
    return result.rows[0];
  } catch (err) {
    console.error('更新会议分类失败:', err);
    throw err;
  }
}

// 初始化数据库
initDatabase().catch(console.error);

module.exports = {
  getConferences,
  addConference,
  updateConferenceCategory
};