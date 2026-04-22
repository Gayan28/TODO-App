import React, { useState } from "react";
import API from "../api";
import toast from "react-hot-toast";

function TodoForm({ fetchTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const addTodo = async () => {
    // Validation
    if (!title.trim()) {
      return toast.error("Title is required");
    }

    try {
      setLoading(true);

      await API.post("/", { title, description });

      toast.success("Task added 🎉");

      setTitle("");
      setDescription("");

      // Refresh list safely
      if (fetchTodos) {
        await fetchTodos();
      }

    } catch (err) {
      console.error(err);

      // Better error handling
      if (err.response) {
        toast.error(err.response.data.message || "Failed to add task");
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

      <button
        className="btn add-btn"
        onClick={addTodo}
        disabled={loading}
      >
        {loading ? "Adding..." : "Add"}
      </button>
    </div>
  );
}

export default TodoForm;