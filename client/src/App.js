import React, { useEffect, useState } from "react";
import API from "./api";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTodos = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await API.get("/");
      setTodos(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load tasks");
      toast.error("Unable to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="app-container">
      <Toaster position="top-right" />

      <div className="dashboard">
        <div className="header">
          <h1>✨ Task Dashboard</h1>
        </div>

        <TodoForm fetchTodos={fetchTodos} />

        {/* LOADING STATE */}
        {loading && (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Loading tasks...
          </p>
        )}

        {/* ERROR STATE */}
        {error && (
          <p style={{ textAlign: "center", color: "yellow", marginTop: "10px" }}>
            {error}
          </p>
        )}

        {/* TODO LIST */}
        {!loading && !error && (
          <TodoList todos={todos} fetchTodos={fetchTodos} />
        )}
      </div>
    </div>
  );
}

export default App;