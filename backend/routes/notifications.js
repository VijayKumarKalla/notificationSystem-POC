const express = require("express");
const router = express.Router();
const db = require("../db");

// GET notifications for a user
router.get("/:userId", (req, res) => {
  const { userId } = req.params;
  db.all(
    "SELECT * FROM notifications WHERE userId = ? ORDER BY createdAt DESC",
    [userId],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    }
  );
});

// POST create notification
router.post("/", (req, res) => {
  const { userId, type, message } = req.body;
  db.run(
    "INSERT INTO notifications (userId, type, message, read, createdAt) VALUES (?,?,?,?,datetime('now'))",
    [userId, type, message, 0],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID, userId, type, message, read: 0 });
    }
  );
});

// POST mark as read
router.post("/read/:id", (req, res) => {
  const { id } = req.params;
  db.run("UPDATE notifications SET read = 1 WHERE id = ?", [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

module.exports = router;
