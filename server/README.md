# ⚙️ Backend – TODO API

This backend provides a RESTful API for managing TODO items and handles data persistence using MongoDB.

---

## 🚀 Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## 📦 Features

* Create TODO items
* Retrieve all TODOs
* Update task details
* Toggle completion status
* Delete tasks

---

## 🔗 API Endpoints

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | /api/todos          | Get all TODOs      |
| POST   | /api/todos          | Create new TODO    |
| PUT    | /api/todos/:id      | Update TODO        |
| PATCH  | /api/todos/:id/done | Toggle done status |
| DELETE | /api/todos/:id      | Delete TODO        |

---

## ⚙️ Setup Instructions

```id="l2c0zv"
cd backend
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file:

```id="yfa2jc"
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## ⚠️ Error Handling

* try-catch blocks used in all controllers
* Proper HTTP status codes (`200, 201, 400, 404, 500`)
* Validation for required fields (e.g., title)
* Clear error messages returned to frontend

---

## 🗄️ Database

MongoDB is used for storing TODO data.

### Sample Schema

```id="1fs7ay"
{
  title: String,
  description: String,
  isDone: Boolean
}
```

---

## 📌 Assumptions

* MongoDB is available locally or via Atlas
* Single-user application

---

## 💡 Future Improvements

* Add authentication (JWT)
* Add request validation middleware
* Add logging and monitoring

---

## 🎯 Summary

The backend follows RESTful principles and is designed to be simple, reliable, and easy to integrate with the frontend.

---
