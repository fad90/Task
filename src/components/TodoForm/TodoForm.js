import React, { useState, useEffect, useRef } from "react";
import "./TodoForm.css";

const TodoForm = (props) => {
  const [input, SetInput] = useState('');

  const inputRef = useRef(null)
  
  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    SetInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    SetInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={input}
        placeholder="add a todo"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
};

export default TodoForm;
