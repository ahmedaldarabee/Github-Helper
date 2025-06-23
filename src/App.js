 import './App.css';
 import * as React from 'react';
import TodoList from './components/TodoList';
import {createTheme, ThemeProvider} from "@mui/material/styles"
import { v4 as uuidv4 } from 'uuid';
import { TodoContext } from './contexts/TodoContext';

// to set configurations of colors around all of app
const theme = createTheme({
  typography:{
    fontFamily:["Oswald"]
  }
});

const initialTodo = [{
        id: uuidv4(),
        title: "SyncHand Project",
        description:"Projects and Tasks management tool",
        isCompleted: false
    },{
        id: uuidv4(),
        title: "Github Helper",
        description:"Github projects management in simple way!",
        isCompleted: false
    }
]

function App() {
  const [todos, setTodos ] = React.useState(initialTodo);
  
  return (
    <ThemeProvider theme={theme}>
      <div className='w-full min-h-screen flex justify-center items-center bg-gray-200'>
          <TodoContext.Provider value={{todos, setTodos}}>
            <TodoList />
          </TodoContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;