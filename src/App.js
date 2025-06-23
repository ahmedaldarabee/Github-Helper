 import './App.css';
import TodoList from './components/TodoList';
import {createTheme, ThemeProvider} from "@mui/material/styles"
// to set configurations around all of app

const theme = createTheme({
  typography:{
    fontFamily:["Oswald"]
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='w-full h-screen flex justify-center items-center bg-gray-200'>
          <TodoList />
      </div>
    </ThemeProvider>
  );
}

export default App;