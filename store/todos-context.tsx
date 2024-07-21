import { TodoType } from "@/components/TodoList";
import { createContext, useState } from "react";

export const TodosContext = createContext({
  todos: [] as TodoType[],
  addTodo: (todo: TodoType) => {},
  removeTodo: (id: number) => {},
});

export default function TodosProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, setTodos] = useState<TodoType[]>([]);

  function addTodo(todo: TodoType) {
    setTodos((current) => [...current, todo]);
  }

  function removeTodo(id: number) {
    const updatedTodos = todos.filter((todo) => todo.id != id);
    setTodos(updatedTodos);
  }

  const value = {
    todos: todos,
    addTodo: addTodo,
    removeTodo: removeTodo,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
}
