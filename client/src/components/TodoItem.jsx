import React, { useState } from "react";
import API from "../api";
import { motion } from "framer-motion";

function TodoItem({ todo, fetchTodos }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const toggleDone = async () => {
    await API.patch(`/${todo._id}/done`);
    fetchTodos();
  };

  const deleteTodo = async () => {
    await API.delete(`/${todo._id}`);
    fetchTodos();
  };

  const updateTodo = async () => {
    await API.put(`/${todo._id}`, { title });
    setEditing(false);
    fetchTodos();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        background: "#fff",
        color: "#333",
        padding: 10,
        margin: "10px 0",
        borderRadius: 10
      }}
    >
      <input type="checkbox" checked={todo.isDone} onChange={toggleDone} />

      {editing ? (
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      ) : (
        <span style={{
          textDecoration: todo.isDone ? "line-through" : "none",
          marginLeft: 10
        }}>
          {todo.title}
        </span>
      )}

      <div>
        {editing ? (
          <button onClick={updateTodo}>Save</button>
        ) : (
          <button onClick={() => setEditing(true)}>Edit</button>
        )}
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </motion.div>
  );
}

export default TodoItem;