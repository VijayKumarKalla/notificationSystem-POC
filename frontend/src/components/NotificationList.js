import React, { useEffect, useState } from "react";
import { fetchNotifications, markAsRead } from "../api";

function NotificationList({ userId }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications(userId).then(setNotifications);
  }, [userId]);

  const handleRead = (id) => {
    markAsRead(id).then(() => {
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, read: 1 } : n))
      );
    });
  };

  return (
    <div style={{ maxWidth: "500px", marginTop: "20px" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>Notifications</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {notifications.map((n) => (
          <li
            key={n.id}
            style={{
              backgroundColor: n.read ? "#fff" : "#f0f8ff",
              fontWeight: n.read ? "normal" : "bold",
              padding: "10px 15px",
              marginBottom: "10px",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {n.message}{" "}
            {!n.read && (
              <button
                onClick={() => handleRead(n.id)}
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Mark as read
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationList;
