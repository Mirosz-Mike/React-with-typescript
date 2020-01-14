import React, { useState } from "react";
import { Todo, ToggleTodo } from "./types";
import TodoList from "./TodoList";

const initialTodos: Array<Todo> = [
  { text: "TodoList react in typescript", complete: true },
  { text: "JavaScript is awesome", complete: true },
  { text: "TypeScript is the future", complete: false }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
