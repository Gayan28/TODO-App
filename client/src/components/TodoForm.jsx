import React, { useState } from "react";
import API from "../api";

function TodoForm({ fetchTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!title.trim()) {
      return setError("Title is required");
    }

    try {
      await API.post("/", { title, description });
      setTitle("");
      setDescription("");
      setError("");
      fetchTodos();
    } catch {
      setError("Failed to add todo");
    }
  };

  return (
    <div className="form">
      <input
        placeholder="Enter task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Enter description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button style={{ background: "#00c9a7", color: "white" }} onClick={handleSubmit}>
        ➕ Add Task
      </button>

      {error && <p style={{ color: "yellow" }}>{error}</p>}
    </div>
  );
}

export default TodoForm;