const db = require("../db");

db.serialize(() => {
  db.run("DELETE FROM users");
  db.run("DELETE FROM followers");
  db.run("DELETE FROM notifications");

  db.run("INSERT INTO users (name) VALUES ('Alice'), ('Bob'), ('Charlie')");

  db.run("INSERT INTO followers (userId, followerId) VALUES (1,2), (1,3), (2,1)");

  db.run(`INSERT INTO notifications (userId, type, message, read, createdAt) VALUES
    (1, 'follow', 'Bob started following you', 0, datetime('now')),
    (1, 'comment', 'Charlie commented on your blog', 0, datetime('now')),
    (2, 'like', 'Alice liked your post', 1, datetime('now')),
    (3, 'follow', 'Alice started following you', 0, datetime('now'))
  `);

  console.log("Database seeded with static data ✅");
});
