import { Button, Input, Flex, Heading } from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";
import { useTodo } from "@/hooks/useTodo.tsx";
function TodoListItems() {
  const { todos, removeTodo, toggleTodo, updateTodo } = useTodo();
  return (
    <>
      {todos.map(todo => (
        <Flex pt={2} key={todo.id}>
          <Checkbox checked={todo.done}
            onChange={() => toggleTodo(todo.id)}
          />
          <Input
            mx={2}
            value={todo.text}
            onChange={e => updateTodo(todo.id, e.target.value)}
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
