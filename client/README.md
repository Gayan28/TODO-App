# 🎨 Frontend – TODO Dashboard

This is the frontend of the TODO application built using React. It provides a modern, interactive dashboard for managing tasks with a strong focus on usability and visual design.

---

## 🚀 Tech Stack

* React.js
* Axios
* Framer Motion (animations)
* React Hot Toast (notifications)

---

## ✨ Features

* Display TODOs in a clean, card-based layout
* Add new tasks with title and description
* Edit tasks using an inline edit form
* Mark tasks as completed/uncompleted
* Delete tasks with confirmation modal
* Clear visual distinction for completed tasks

---

## 💎 UX & UI Enhancements

* Gradient background with glassmorphism design
* Smooth animations and transitions (Framer Motion)
* Hover effects and button feedback
* Toast notifications for success/error states
* Loading states to improve responsiveness
* Disabled actions during API calls to prevent duplicate operations

---

## ⚙️ Setup Instructions

```id="dxv3p5"
cd frontend
npm install
npm start
```

---

## 🔗 API Integration

The frontend communicates with the backend using RESTful API calls:

* `GET /api/todos` – Fetch all tasks
* `POST /api/todos` – Create task
* `PUT /api/todos/:id` – Update task
* `PATCH /api/todos/:id/done` – Toggle completion
* `DELETE /api/todos/:id` – Delete task

---

## ⚠️ Error Handling

* try-catch blocks used for all API calls
* User-friendly toast messages for errors
* Global Axios interceptor for consistent error handling
* Loading states for better UX

---

## 📌 Assumptions

* Backend runs on `http://localhost:5000`
* No authentication required

---

## 💡 Future Improvements

* Task filtering (All / Completed / Active)
* Search functionality
* Dark mode

---

## 🎯 Summary

The frontend was designed to be simple, responsive, and user-friendly while incorporating modern UI practices and smooth user interactions.

---
