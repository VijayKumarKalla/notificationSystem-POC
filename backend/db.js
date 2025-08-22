const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./notifications.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS followers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    followerId INTEGER
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS notifications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    type TEXT,
    message TEXT,
    read BOOLEAN,
    createdAt DATETIME
  )`);
});

module.exports = db;
