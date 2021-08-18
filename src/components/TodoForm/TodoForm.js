import React, { useState } from "react";

const TodoForm = (props) => {
  const [input, SetInput] = useState("");

  const handleChange = e => {
    SetInput(e.target.value);
  };

  const handleSubmit = e => {
      e.preventDefault();

      // props.onSubmit({
      //   id: Math.floor(Math.random() * 10000),
      //   text: input
      // });

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
