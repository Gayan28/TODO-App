import React, { useState } from "react";
import API from "../api";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

function TodoItem({ todo, fetchTodos }) {
  const [editing, setEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description || "");

  const [loading, setLoading] = useState(false);

  const toggleDone = async () => {
    try {
      setLoading(true);

      await API.patch(`/${todo._id}/done`);
      toast.success("Task updated");

      if (fetchTodos) await fetchTodos();
    } catch (err) {
      console.error(err);

      if (err.response) {
        toast.error(err.response.data.message || "Failed to update task");
      } else if (err.request) {
        toast.error("Network error. Please try again.");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const updateTodo = async () => {
    if (!title.trim()) return toast.error("Title required");

    try {
      setLoading(true);

      await API.put(`/${todo._id}`, { title, description });
      toast.success("Task updated");

      setEditing(false);

      if (fetchTodos) await fetchTodos();
    } catch (err) {
      console.error(err);

      if (err.response) {
        toast.error(err.response.data.message || "Failed to update task");
      } else if (err.request) {
        toast.error("Network error. Please try again.");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const deleteTodo = async () => {
    try {
      setLoading(true);

      await API.delete(`/${todo._id}`);
      toast.success("Task deleted");

      setShowModal(false);

      if (fetchTodos) await fetchTodos();
    } catch (err) {
      console.error(err);

      if (err.response) {
        toast.error(err.response.data.message || "Failed to delete task");
      } else if (err.request) {
        toast.error("Network error. Please try again.");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
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
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={toggleDone}
              disabled={loading}
            />
            <span className={`todo-title ${todo.isDone ? "done" : ""}`}>
              {todo.title}
            </span>
          </div>

          <div className="actions">
            <button
              className="btn edit"
              onClick={() => setEditing(!editing)}
              disabled={loading}
            >
              {editing ? "Close" : "Edit"}
            </button>

            <button
              className="btn delete"
              onClick={() => setShowModal(true)}
              disabled={loading}
            >
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
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={loading}
            />

            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={loading}
            />

            <div className="actions">
              <button
                className="btn save"
                onClick={updateTodo}
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>

              <button
                className="btn cancel"
                onClick={() => setEditing(false)}
                disabled={loading}
              >
                Cancel
              </button>
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
            <p>
              Are you sure you want to delete this task? <br />
              This action cannot be undone.
            </p>

            <div className="modal-actions">
              <button
                className="btn delete"
                onClick={deleteTodo}
                disabled={loading}
              >
                {loading ? "Deleting..." : "Yes, Delete"}
              </button>

              <button
                className="btn cancel"
                onClick={() => setShowModal(false)}
                disabled={loading}
              >
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