import "./App.css";
import TodoList from './TodoList';
import { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import React from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const todoNameRef = useRef();

  const handleAddTodo = (e) => {
    // console.log(todoNameRef.current.value);
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type='text' name="" id="" ref={todoNameRef} />
      <button onClick={handleAddTodo}>追加</button>
      <button onClick={handleClear} >完了した削除</button>
      <div>残りのタスク: {todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
}

export default App;
