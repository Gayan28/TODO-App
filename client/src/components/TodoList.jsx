import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, fetchTodos }) {
  if (todos.length === 0) {
    return <p style={{ textAlign: "center" }}>🚀 No tasks yet. Add one!</p>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} fetchTodos={fetchTodos} />
      ))}
    </div>
  );
}

export default TodoList;