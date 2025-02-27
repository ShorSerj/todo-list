import { Button, Input, Grid } from "@chakra-ui/react";
import { useTodo } from "@/hooks/useTodo.tsx";
import { useState } from "react";

function TodoAdd() {
  const [newTodo, newTodoState] = useState('');
  const { addTodo } = useTodo();
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={newTodo}
        onChange={e => newTodoState(e.target.value)}
      />
      <Button onClick={() => {
        addTodo({id: crypto.randomUUID(), text:newTodo, done:false })
        newTodoState('')
      }}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
