import React, { useState } from "react";
import { createNotification } from "../api";
import "./NotificationForm.css";

// Static user map for seeded users
const users = {
  1: "Alice",
  2: "Bob",
  3: "Charlie",
};

function NotificationForm({ userId }) {
  const [targetUserId, setTargetUserId] = useState("");
  const [type, setType] = useState("like");
  const [status, setStatus] = useState("");
  const [showForm, setShowForm] = useState(false);

  // Fallback sender name
  const senderName = users[userId] || `User ${userId}`;
  console.log(userId)
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    if (!targetUserId || Number(targetUserId) === userId) {
      setStatus(" Invalid target user (cannot be empty or self).");
      return;
    }

    let message = "";
    if (type === "like") {
      message = `${senderName} liked your post.`;
    } else if (type === "comment") {
      message = `${senderName} commented on your post.`;
    } else if (type === "follow") {
      message = `${senderName} started following you.`;
    }

    try {
      await createNotification({
        userId: Number(targetUserId),
        type,
        message,
      });

      setStatus(
        ` Notification sent to ${
          users[targetUserId] || `User ${targetUserId}`
        }`
      );
      setTargetUserId("");
      setType("like");
    } catch (error) {
      setStatus(" Failed to send notification.");
    }
  };

  return (
    <div className="form-wrapper">
      {/* Toggle button */}
      <button
        className="toggle-btn"
        onClick={() => setShowForm((prev) => !prev)}
      >
        {showForm ? "Close Form" : "Send Notification"}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="notification-form">
          <h3>Create Notification</h3>

          <div className="form-group">
            <label>Target User ID</label>
            <input
              type="number"
              value={targetUserId}
              onChange={(e) => setTargetUserId(e.target.value)}
              placeholder="Enter user ID"
              required
            />
          </div>

          <div className="form-group">
            <label>Action</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="like"> Like</option>
              <option value="comment"> Comment</option>
              <option value="follow">Follow</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Send Notification
          </button>
        </form>
      )}

      {status && <p className="status">{status}</p>}

      <p className="disclaimer">
         To view notifications of targeted id user, visit:
        <br />
        <p>https://insyd-notification-poc.netlify.app/?userId={targetUserId}</p>
      </p>
    </div>
  );
}

export default NotificationForm;
