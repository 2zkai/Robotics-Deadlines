const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./roboddl.db');

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

// 创建表并插入数据
function initDatabase() {
    // 首先创建表
    db.run(`CREATE TABLE IF NOT EXISTS conferences (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      deadline TEXT NOT NULL,
      category TEXT NOT NULL
    )`, (err) => {
        if (err) {
            console.error('创建表失败:', err);
            return;
        }
        console.log('会议表创建成功');
        
        // 然后插入数据
        insertConferences();
    });
}

// 插入数据
function insertConferences() {
    // 首先清空表
    db.run('DELETE FROM conferences', (err) => {
        if (err) {
            console.error('清空表失败:', err);
            return;
        }
        console.log('已清空旧数据');
        
        // 然后插入新数据
        const stmt = db.prepare('INSERT INTO conferences (name, deadline, category) VALUES (?, ?, ?)');
        
        conferences.forEach(conf => {
            stmt.run(conf.name, conf.deadline, conf.category, (err) => {
                if (err) {
                    console.error(`Error inserting ${conf.name}:`, err);
                } else {
                    console.log(`Successfully inserted ${conf.name}`);
                }
            });
        });
        
        stmt.finalize();
    });
}

// 执行初始化
initDatabase();

// 关闭数据库连接
setTimeout(() => {
    db.close((err) => {
        if (err) {
            console.error('Error closing database:', err);
        } else {
            console.log('Database connection closed');
        }
    });
}, 2000); 