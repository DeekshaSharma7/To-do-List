// src/components/TodoList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../actions/todoActions";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={() => dispatch(removeTodo(todo.id))}
            onToggle={() => dispatch(toggleTodo(todo.id))}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
