import "./App.css";
import * as React from "react";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "./contexts/TodoContext";
import { ToastProvider } from "./contexts/ToastContext";



// to set configurations of colors around all of app
const theme = createTheme({
  typography: {
    fontFamily: ["Oswald"],
  },
  palette: {
    primary: {
      main: "#039be5",
    },
  },
});

const initialTodo = [{
    id: uuidv4(),
    title: "First Project",
    description: "Testing for see how we can add description to the project.",
    isCompleted: false,
  },
];

function App() {
  const [todos, setTodos] = React.useState(initialTodo);

  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
          <div className="w-full min-h-screen flex justify-center items-center bg-gray-200">
            <TodoContext.Provider value={{ todos, setTodos }}>
              <TodoList />
            </TodoContext.Provider>
          </div>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
