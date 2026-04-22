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
    toast.success("Updated");
    fetchTodos();
  };

  const updateTodo = async () => {
    if (!title.trim()) return toast.error("Title required");

    await API.put(`/${todo._id}`, { title, description });
    toast.success("Updated");
    setEditing(false);
    fetchTodos();
  };

  const deleteTodo = async () => {
    await API.delete(`/${todo._id}`);
    toast.success("Deleted");
    setShowModal(false);
    fetchTodos();
  };

  return (
    <>
      <motion.div
        className="todo-card"
        layout
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: -50 }}
      >
        <div className="todo-top">
          <div>
            <input type="checkbox" checked={todo.isDone} onChange={toggleDone} />
            <span className={`todo-title ${todo.isDone ? "done" : ""}`}>
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

        <div className={`todo-desc ${todo.isDone ? "done" : ""}`}>
          {todo.description || "No description"}
        </div>

        {editing && (
          <motion.div
            className="edit-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <input value={description} onChange={(e) => setDescription(e.target.value)} />

            <div className="actions">
              <button className="btn save" onClick={updateTodo}>Save</button>
              <button className="btn cancel" onClick={() => setEditing(false)}>Cancel</button>
            </div>
          </motion.div>
        )}
      </motion.div>

      {showModal && (
        <div className="modal-overlay">
          <motion.div
            className="modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h3>Delete Task</h3>
            <p>Are you sure you want to delete this task? This cannot be undone.</p>

            <div className="modal-actions">
              <button className="btn delete" onClick={deleteTodo}>
                Yes, Delete
              </button>
              <button className="btn cancel" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default TodoItem;