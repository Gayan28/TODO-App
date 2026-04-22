import React, { useState } from "react";
import API from "../api";
import toast from "react-hot-toast";

function TodoForm({ fetchTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = async () => {
    if (!title.trim()) return toast.error("Title is required");

    await API.post("/", { title, description });
    toast.success("Task added");

    setTitle("");
    setDescription("");
    fetchTodos();
  };

  return (
    <div className="form">
      <input
        placeholder="Task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="add-btn" onClick={addTodo}>
        Add
      </button>
    </div>
  );
}

export default TodoForm;