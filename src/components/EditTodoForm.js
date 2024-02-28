import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task,todos  }) => {
  const [value, setValue] = useState(task.task);
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === '') {
        setError('Task cannot be empty !!');
    }else if (todos.some(todo => todo.task.toLowerCase() === value.trim().toLowerCase())) {
        setError('Task already exists !!');
    } else {
        setError('');
        editTodo(value, task.id);
        setValue("");
      }
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update
      </button>
      {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default EditTodoForm;
