import { TodoContext } from "@/context/TodoContext.tsx";
import { useContext } from "react";

export const useTodo = () => {
  const todoContext = useContext(TodoContext)

  if(!todoContext) throw new Error('useTodo must be used within a TodoProvider')

  return todoContext
}