import React, { useState } from "react";

const TodoForm = () => {
  const [input, SetInput] = useState("");

  const handleChange = e => {
    SetInput(e.target.value);
  }

  const handleSubmit = e => {
      e.preventDefault();
      SetInput('');
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={input}
        placeholder="add a todo"
        onChange={handleChange}
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
};

export default TodoForm;
