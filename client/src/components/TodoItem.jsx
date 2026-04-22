import React, { useState } from "react";
import API from "../api";
import { motion } from "framer-motion";

function TodoItem({ todo, fetchTodos }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description || "");

  const toggleDone = async () => {
    await API.patch(`/${todo._id}/done`);
    fetchTodos();
  };

  const deleteTodo = async () => {
    await API.delete(`/${todo._id}`);
    fetchTodos();
  };

  const updateTodo = async () => {
    await API.put(`/${todo._id}`, { title, description });
    setEditing(false);
    fetchTodos();
  };

  return (
    <motion.div
      className="todo-card"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="todo-header">
        <div>
          <input type="checkbox" checked={todo.isDone} onChange={toggleDone} />

          {editing ? (
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ marginLeft: 10 }}
            />
          ) : (
            <span
              className={`todo-title ${todo.isDone ? "done" : ""}`}
              style={{ marginLeft: 10 }}
            >
              {todo.title}
            </span>
          )}
        </div>

        <div className="todo-actions">
          {editing ? (
            <button style={{ background: "#4CAF50", color: "white" }} onClick={updateTodo}>
              Save
            </button>
          ) : (
            <button style={{ background: "#2196F3", color: "white" }} onClick={() => setEditing(true)}>
              Edit
            </button>
          )}

          <button style={{ background: "#f44336", color: "white" }} onClick={deleteTodo}>
            Delete
          </button>
        </div>
      </div>

      {/* DESCRIPTION */}
      {editing ? (
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Edit description..."
        />
      ) : (
        <div className={`todo-desc ${todo.isDone ? "done" : ""}`}>
          {todo.description || "No description"}
        </div>
      )}
    </motion.div>
  );
}

export default TodoItem;