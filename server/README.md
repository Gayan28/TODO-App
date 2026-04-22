# ⚙️ Backend – TODO API

This is the backend service for the TODO application. It provides a RESTful API for managing tasks and handles data persistence using MongoDB.

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

```
cd backend
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file in the backend folder:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## 🗄️ Database

* MongoDB is used for data storage
* Mongoose is used for schema modeling

### Sample Schema

```
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

## ⚠️ Limitations

* No authentication or authorization
* No input sanitization for advanced security
* No rate limiting

---

## 💡 Future Improvements

* Add authentication (JWT)
* Add validation middleware
* Implement pagination

---

## 🎯 Summary

The backend was designed following RESTful principles with a clear separation of concerns. The goal was to keep the API simple, scalable, and easy to integrate with the frontend.

---
