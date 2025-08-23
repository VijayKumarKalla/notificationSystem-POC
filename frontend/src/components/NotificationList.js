import React, { useEffect, useState } from "react";
import { fetchNotifications, markAsRead } from "../api";
import "./NotificationList.css";

function NotificationList({ userId }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const loadNotifications = () => {
      fetchNotifications(userId).then(setNotifications);
    };

    loadNotifications(); // initial fetch
    const interval = setInterval(loadNotifications, 5000);
    return () => clearInterval(interval);
  }, [userId]); // ✅ only depends on userId

  const handleRead = (id) => {
    markAsRead(id).then(() => {
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, read: 1 } : n))
      );
    });
  };

  return (
    <div className="notifications-container">
      <h2 className="notifications-title">Notifications</h2>

      {notifications.length === 0 ? (
        <p className="no-notifications">😊 No notifications yet!</p>
      ) : (
        <ul className="notifications-list">
          {notifications.map((n) => (
            <li
              key={n.id}
              className={`notification-item ${n.read ? "read" : "unread"}`}
            >
              <span className="notification-message">{n.message}</span>
              {!n.read && (
                <button
                  onClick={() => handleRead(n.id)}
                  className="mark-read-btn"
                >
                  Mark as read
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotificationList;
