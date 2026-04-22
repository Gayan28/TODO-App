import React, { useEffect, useState } from "react";
import API from "./api";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const res = await API.get("/");
      setTodos(res.data);
      setError("");
    } catch (err) {
      setError("Failed to load todos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="app-container">
      <div className="glass">
        <h1>✨ Colorful TODO App</h1>

        <TodoForm fetchTodos={fetchTodos} />

        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}

        <TodoList todos={todos} fetchTodos={fetchTodos} />
      </div>
    </div>
  );
}

export default App;