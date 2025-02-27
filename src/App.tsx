import { Provider } from "@/components/ui/provider";
import { TodoProvider } from "@/context/TodoContext.tsx";
import TopBar from "./components/TopBar.tsx";
import TodoList from "@/components/TodoList.tsx";
import TodoAdd from "@/components/TodoAdd.tsx";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Provider>
      <TodoProvider>
        <Box maxWidth="8xl" margin="auto" p={5}>
          <TopBar />
          <TodoList />
          <TodoAdd />
        </Box>
      </TodoProvider>
    </Provider>
  );
}

export default App;
