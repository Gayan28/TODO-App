import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, fetchTodos }) {

  if (todos.length === 0) {
  return (
    <div style={{ textAlign: "center", marginTop: "20px", color: "white" }}>
      <h3>🎉 No tasks yet</h3>
      <p>Add your first TODO above!</p>
    </div>
  );
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