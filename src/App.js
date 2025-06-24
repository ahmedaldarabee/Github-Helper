import "./App.css";
import * as React from "react";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "./contexts/TodoContext";
import SnackBarComponent from "./components/SnackBar";
import { ToastContext } from "./contexts/ToastContext";
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

const initialTodo = [
  {
    id: uuidv4(),
    title: "SyncHand Project",
    description: "Projects and Tasks management tool",
    isCompleted: false,
  },
];

function App() {
  const [todos, setTodos] = React.useState(initialTodo);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  function showToastMessage(message) {
    setOpen(true);
    setMessage(message)
    setTimeout(() => {
      // هذا يعني اخر تنفيذ هذا الفنكشن لبعد ثانيتين يعني ما تنفذو الى بعد ثانيتين
      setOpen(false);
    }, 3000);
  }

  return (
    <ThemeProvider theme={theme}>
    {/* {{because showToastMessage is a function}} */}
      <ToastContext.Provider value={{showToastMessage}}>
        <SnackBarComponent open={open} message={message}/>
        <div className="w-full min-h-screen flex justify-center items-center bg-gray-200">
          <TodoContext.Provider value={{ todos, setTodos }}>
            <TodoList />
          </TodoContext.Provider>
        </div>
      </ToastContext.Provider>
    </ThemeProvider>
  );
}

export default App;
