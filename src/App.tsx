import { Provider } from "@/components/ui/provider";
import { Provider as JotaiProvider } from "jotai";
import TopBar from "./components/TopBar.tsx";
import TodoList from "@/components/TodoList.tsx";
import TodoAdd from "@/components/TodoAdd.tsx";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Provider>
      <JotaiProvider>
        <Box maxWidth="8xl" margin="auto" p={5}>
          <TopBar />
          <TodoList />
          <TodoAdd />
        </Box>
      </JotaiProvider>
    </Provider>
  );
}

export default App;
