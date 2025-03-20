//假的代码，用于初始化数据库，插入虚假会议数据
// 请勿运行此文件，否则会清空数据库中的数据
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://localhost:5432/robotics_deadlines',
  ssl: process.env.DATABASE_URL ? {
    rejectUnauthorized: false
  } : false
});

// 会议数据
const conferences = [
    // 学习与控制
    {
        name: "ICRA 2024",
        deadline: "2024-09-15",
        category: "learning-control"
    },
    {
        name: "CoRL 2024",
        deadline: "2024-06-15",
        category: "learning-control"
    },
    {
        name: "RSS 2024",
        deadline: "2024-02-15",
        category: "learning-control"
    },

    // 感知与视觉
    {
        name: "CVPR 2024",
        deadline: "2024-11-15",
        category: "perception-vision"
    },
    {
        name: "ICCV 2024",
        deadline: "2024-03-15",
        category: "perception-vision"
    },
    {
        name: "3DV 2024",
        deadline: "2024-06-20",
        category: "perception-vision"
    },

    // 系统与规划
    {
        name: "IROS 2024",
        deadline: "2024-03-01",
        category: "systems-planning"
    },
    {
        name: "WAFR 2024",
        deadline: "2024-04-15",
        category: "systems-planning"
    },
    {
        name: "ISRR 2024",
        deadline: "2024-05-01",
        category: "systems-planning"
    },

    // 人机交互
    {
        name: "HRI 2024",
        deadline: "2024-09-20",
        category: "human-interaction"
    },
    {
        name: "RO-MAN 2024",
        deadline: "2024-04-01",
        category: "human-interaction"
    },

    // 应用
    {
        name: "CASE 2024",
        deadline: "2024-02-20",
        category: "applications"
    },
    {
        name: "ICAR 2024",
        deadline: "2024-07-15",
        category: "applications"
    }
];

async function initDatabase() {
  try {
    // 创建表
    await pool.query(`
      CREATE TABLE IF NOT EXISTS conferences (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        deadline TIMESTAMP NOT NULL,
        category VARCHAR(100) NOT NULL
      )
    `);

    // 清空现有数据
    await pool.query('TRUNCATE conferences');

    // 插入新数据
    for (const conf of conferences) {
      await pool.query(
        'INSERT INTO conferences (name, deadline, category) VALUES ($1, $2, $3)',
        [conf.name, conf.deadline, conf.category]
      );
    }

    console.log('数据库初始化成功');
  } catch (err) {
    console.error('初始化失败:', err);
  } finally {
    await pool.end();
  }
}

initDatabase();