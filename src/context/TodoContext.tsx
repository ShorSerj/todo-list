import { createContext, PropsWithChildren, useCallback, useState, useMemo, FC } from "react";

type Todo = {
  id: string;
  text: string;
  done: boolean;
}

type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  removeTodo: (id: string) => void;
}


export const TodoContext = createContext<TodoContextType | null>(null);
export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = useCallback((todo: Todo) => {
    setTodos((todos) => [...todos, todo]);
  }, [])

  const toggleTodo = useCallback((id: string) => {
    setTodos((todos) =>
      todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done} : todo))
    );
  }, [])

  const updateTodo = useCallback((id: string, text: string) => {
    setTodos((todos) =>
      todos.map(todo => (todo.id === id ? { ...todo, text: text} : todo))
    );
  }, [])

  const removeTodo = useCallback((id: string) => {
    setTodos((todos) => todos.filter(todo => todo.id !== id));
  }, [])

  const value = useMemo(
    () => ({todos, addTodo, toggleTodo, updateTodo, removeTodo}), [todos]
  );

  return (
    <TodoContext.Provider value={value}>
        {children}
    </TodoContext.Provider>
  )
}