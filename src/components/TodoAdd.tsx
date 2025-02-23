import { Button, Input, Grid } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { addTodoAtom, newTodoAtom } from "../store.ts";

function TodoAdd() {
  const [newTodo, newTodoState] = useAtom(newTodoAtom);
  const [, addTodo] = useAtom(addTodoAtom);
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={newTodo}
        onChange={e => newTodoState(e.target.value)}
      />
      <Button onClick={() => addTodo()}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
