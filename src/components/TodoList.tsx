import { Button, Input, Flex, Heading } from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";
import { useAtom } from "jotai";
import {
  removeTodoAtom,
  todosAtom,
  toggleTodoAtom,
  updateTodoAtom
} from "@/store.ts";
function TodoListItems() {
  const [todos] = useAtom(todosAtom);
  const [, toggleTodo] = useAtom(toggleTodoAtom);
  const [, updateTodo] = useAtom(updateTodoAtom);
  const [, removeTodo] = useAtom(removeTodoAtom);
  return (
    <>
      {todos.map(todo => (
        <Flex pt={2} key={todo.id}>
          <Checkbox checked={todo.done} onChange={() => toggleTodo(todo.id)} />
          <Input
            mx={2}
            value={todo.text}
            onChange={e => updateTodo({ id: todo.id, text: e.target.value })}
          />
          <Button onClick={() => removeTodo(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  );
}

export default TodoList;
