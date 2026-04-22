import React, { useEffect, useState } from "react";
import API from "./api";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Toaster } from "react-hot-toast";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await API.get("/");
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="app-container">
      <Toaster position="top-right" />
      
      <div className="dashboard">
        <div className="header">
          <h1>📋 Task Dashboard</h1>
        </div>

        <TodoForm fetchTodos={fetchTodos} />
        <TodoList todos={todos} fetchTodos={fetchTodos} />
      </div>
    </div>
  );
}

export default App;