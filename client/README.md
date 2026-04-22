# 🎨 Frontend – TODO Dashboard

This is the frontend of the TODO application built using React. It provides a modern, clean, and interactive user interface for managing tasks.

---

## 🚀 Tech Stack

* React.js
* Axios (API communication)
* Framer Motion (animations)
* React Hot Toast (notifications)

---

## ✨ Features

* Display all TODO items in a clean dashboard layout
* Add new tasks using a simple form
* Edit task title and description with inline form
* Mark tasks as complete/incomplete
* Delete tasks with confirmation modal
* Visual distinction for completed tasks
* Toast notifications for user feedback

---

## 🧩 UI Highlights

* Gradient background with glassmorphism design
* Smooth animations for task cards
* Well-spaced layout with clear typography
* Responsive and user-friendly interface

---

## ⚙️ Setup Instructions

```
cd frontend
npm install
npm start
```

---

## 🔗 API Integration

The frontend communicates with the backend via HTTP requests:

* `GET /api/todos`
* `POST /api/todos`
* `PUT /api/todos/:id`
* `PATCH /api/todos/:id/done`
* `DELETE /api/todos/:id`

---

## 📌 Assumptions

* Backend is running on `http://localhost:5000`
* No authentication required

---

## ⚠️ Limitations

* No pagination or filtering
* No multi-user support

---

## 💡 Improvements (Future Work)

* Add task filtering (All / Completed / Active)
* Add due dates and priorities
* Implement authentication

---

## 🎯 Summary

The frontend was designed with a focus on simplicity, usability, and visual clarity. The goal was to create an intuitive experience while maintaining clean and maintainable code.

---
