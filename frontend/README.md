# Insyd Notification POC - Frontend

This is the **frontend** of the Insyd Notification Proof-of-Concept (POC) application.  
It fetches and displays notifications for different users using a simple React app with minimal styling.

---

## Features

- Display notifications for a specific user based on URL parameter (`userId`)
- Highlight unread notifications (bold + light blue background)
- Mark notifications as read (updates frontend immediately)
- Minimal, clean UI for quick testing

---

## Requirements

- Node.js v18+  
- Backend server running at `http://localhost:4000` (from `backend/` folder)
- NPM or Yarn

---

## Installation

1. Navigate to the frontend folder:
```bash
cd frontend
npm install
npm start

#Opens browser at http://localhost:3000

####Notifications for Alice (userId=1) displayed by default

-Use the URL parameter userId to fetch notifications for different users:

http://localhost:3000/?userId=1   → Alice
http://localhost:3000/?userId=2   → Bob
http://localhost:3000/?userId=3   → Charlie


Unread notifications are bold + blue background

Click Mark as read to update notification status

