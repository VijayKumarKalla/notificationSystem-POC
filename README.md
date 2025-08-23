# Insyd Notification System – POC

This is a proof-of-concept notification system for **Insyd**, a next-generation social platform for the Architecture industry.  
It demonstrates how users can send and view notifications such as follows, likes, and comments.

---

## 🚀 Deployed Application

Frontend: [https://insyd-notifcation.netlify.app](https://insyd-notifcation.netlify.app)  
Backend: `<https://insyd-backend-m2lb.onrender.com/notifications/{userId}>`



---

## 📌 How to Use

### 1. View Notifications of a User
Each user can view their notifications by visiting:

https://insyd-notifcation.netlify.app/?userId={userId}


For example:
- **Alice (User 1):** https://insyd-notifcation.netlify.app/?userId=1  
- **Bob (User 2):** https://insyd-notifcation.netlify.app/?userId=2  
- **Charlie (User 3):** https://insyd-notifcation.netlify.app/?userId=3  

👉 You can also try **any other `userId` (e.g., 4, 5, 10, etc.)** — the app won’t throw an error because of the database seeding logic.  
If the user doesn’t exist, the app will still work but simply show no notifications.

If you don’t provide a `userId`, it defaults to **Alice (1)**.

---

### 2. Send a New Notification
1. Click on the **"Send Notification"** button (form will expand).  
2. Select:
   - **Action type** (Follow / Like / Comment)  
   - **Target user** (the recipient of the action)  
3. Click **Submit**.  
4. The notification will appear in the target user’s notification list.  

⚠️ Note:  
- A user **cannot follow themselves**, but they can like or comment on their own posts.  
- Notifications refresh automatically every 5 seconds.

---

## ⚙️ Tech Stack
- **Frontend:** ReactJS  
- **Backend:** Node.js + Express  
- **Database:** SQLite (seeded with 3 sample users: Alice, Bob, Charlie)  

---

## 🧪 Example Test Flow
1. Open [https://insyd-notifcation.netlify.app/?userId=1](https://insyd-notifcation.netlify.app/?userId=1) → view Alice’s notifications.  
2. Send a **Follow** notification from Alice to Bob.  
3. Open [https://insyd-notifcation.netlify.app/?userId=2](https://insyd-notifcation.netlify.app/?userId=2) → see Bob’s notification.  
4. Try with any other `userId` (e.g., `?userId=10`) → works fine, will just show an empty notification list until you send something to that user.

---

## 📌 Limitations
- No authentication  
- No real-time WebSockets (only polling every 5 seconds)  
- SQLite is used for demo only  

---

## ✨ Future Improvements
- Real-time notifications with WebSockets  
- Authentication & user sessions  
- Richer UI/UX
