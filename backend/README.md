

# Insyd Notification POC - Backend

This is the **backend** of the Insyd Notification Proof-of-Concept (POC) application.  
It handles notification data storage, retrieval, and updating using **Node.js + Express + SQLite**.

---

## Features

- Store users, followers, and notifications in SQLite
- Fetch notifications for a specific user
- Add new notifications
- Mark notifications as read
- Static seed data included for easy testing

---

## Requirements

- Node.js v18+  
- NPM or Yarn

---

## Installation

1. Navigate to the backend folder:
```bash
cd backend
cd backend
npm install
npm run seed
npm start

##Backend runs on: http://localhost:4000

GET /notifications/:userId – Fetch notifications for a user

Postman setup:

Method: GET

URL: http://localhost:4000/notifications/1 (Alice)

Params: none

Headers: none

Expected Response (sample):

[
  {
    "id": 1,
    "userId": 1,
    "type": "follow",
    "message": "Bob started following you",
    "read": 0,
    "createdAt": "2025-08-22 12:00:00"
  },
  {
    "id": 2,
    "userId": 1,
    "type": "comment",
    "message": "Charlie commented on your blog",
    "read": 0,
    "createdAt": "2025-08-22 12:05:00"
  }
]

2️⃣ POST /notifications – Create a new notification

Postman setup:

Method: POST

URL: http://localhost:4000/notifications

Body: Select raw → JSON

{
  "userId": 2,
  "type": "follow",
  "message": "Alice started following you"
}


Expected Response:

{
  "id": 5,
  "userId": 2,
  "type": "follow",
  "message": "Alice started following you",
  "read": 0
}


Tip: After creating, use GET /notifications/2 to confirm it appears for Bob.

3️⃣ POST /notifications/read/:id – Mark notification as read

Postman setup:

Method: POST

URL: http://localhost:4000/notifications/read/1

Body: none

Headers: none

Expected Response:

{
  "success": true
}


