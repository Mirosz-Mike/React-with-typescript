import React from "react";
import { Todo, ToggleTodo } from "./types";
import "./TodoListItem.css";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <div>
      <li>
        <label className={todo.complete ? "complete" : undefined}>
          <input
            type="checkbox"
            defaultChecked={todo.complete}
            onChange={() => toggleTodo(todo)}
          />
          {todo.text}
        </label>
      </li>
    </div>
  );
};

export default TodoListItem;
