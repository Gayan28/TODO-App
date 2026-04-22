import React, { useState } from "react";
import API from "../api";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

function TodoItem({ todo, fetchTodos }) {
  const [editing, setEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description || "");

  const toggleDone = async () => {
    await API.patch(`/${todo._id}/done`);
    toast.success("Task updated");
    fetchTodos();
  };

  const updateTodo = async () => {
    if (!title.trim()) return toast.error("Title cannot be empty");

    await API.put(`/${todo._id}`, { title, description });
    toast.success("Task updated successfully");
    setEditing(false);
    fetchTodos();
  };

  const deleteTodo = async () => {
    await API.delete(`/${todo._id}`);
    toast.success("Task deleted");
    setShowModal(false);
    fetchTodos();
  };

  return (
    <>
      <motion.div
        className="todo-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="todo-top">
          <div>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={toggleDone}
            />

            <span
              className={`todo-title ${todo.isDone ? "done" : ""}`}
              style={{ marginLeft: 10 }}
            >
              {todo.title}
            </span>
          </div>

          <div className="actions">
            <button className="btn edit" onClick={() => setEditing(!editing)}>
              {editing ? "Close" : "Edit"}
            </button>

            <button className="btn delete" onClick={() => setShowModal(true)}>
              Delete
            </button>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className={`todo-desc ${todo.isDone ? "done" : ""}`}>
          {todo.description || "No description provided"}
        </div>

        {/* EDIT FORM */}
        {editing && (
          <div className="edit-form">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Edit title"
            />

            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Edit description"
            />

            <div className="actions">
              <button className="btn save" onClick={updateTodo}>
                Save Changes
              </button>

              <button
                className="btn cancel"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </motion.div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Delete Task</h3>
            <p>
              Are you sure you want to delete this task? <br />
              This action cannot be undone.
            </p>

            <div className="modal-actions">
              <button className="btn delete" onClick={deleteTodo}>
                Yes, Delete
              </button>

              <button
                className="btn cancel"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TodoItem;