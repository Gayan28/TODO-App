import React from "react";
import TodoItem from "./TodoItem";
import { AnimatePresence } from "framer-motion";

function TodoList({ todos, fetchTodos }) {
  if (todos.length === 0) {
    return <p className="empty">🚀 No tasks yet. Add your first task!</p>;
  }

  return (
    <AnimatePresence>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} fetchTodos={fetchTodos} />
      ))}
    </AnimatePresence>
  );
}

export default TodoList;