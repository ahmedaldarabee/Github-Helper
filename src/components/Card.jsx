import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import InsightsIcon from '@mui/icons-material/Insights';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { TodoContext } from '../contexts/TodoContext';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatAlignJustifyOutlinedIcon from '@mui/icons-material/FormatAlignJustifyOutlined';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import AutorenewIcon from '@mui/icons-material/Autorenew';

export default function BasicCard() {
    const [titleInput,setTitleInput] = React.useState("");
    const flexStyle = 'flex justify-center items-center gap-2 p-2';
    const {todos,setTodos} = React.useContext(TodoContext);
    const [displayTodoType,setDisplayTodoType] = React.useState("all");

    const completedTodos = React.useMemo(() => {
        return todos.filter((t) => t.isCompleted);
    },[todos]);

    const unCompletedTodos = React.useMemo(() => {
        return todos.filter((t) => !t.isCompleted);
    },[todos])

    // switching between tabs section

    let todoToBeRendered = todos;

    if(displayTodoType === "completed"){
        todoToBeRendered = completedTodos;
        // لاحظ انو بتم عرض البيانات الجديدة في نفس البودي المخصص للعناصر كلها ولاكن بناءاً على الأكتف بتم تنصيف لي تم الضغط عليه وعرضه في المكان الأساسي المخصص له
    }else if(displayTodoType === "uncompleted"){
        todoToBeRendered = unCompletedTodos;
    }else{
        todoToBeRendered = todos;
    }

    // to show all todos in body of card
    const todoArr = todoToBeRendered.map((project) => {
        return (
            // todo={project} we sent all of the object about all data as one box
            <Todo key={project.id} todo={project}/>
        )
    })

    const changeDisplayedTodo = (e) => {
        setDisplayTodoType(e.target.value);
    }

    React.useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem("todosData")) ?? [];
        //  ?? []; this section mean if return value be as null or undefined return empty array in shorted way!
        // لحتى تحل مشكلة انو لما تعمل حذف للبيانات في لوكال ستورج بعطي رسالة خطأ معينة
        // رسالة الخطأ تتعلق بالنل
        setTodos(storageTodos);
    },[setTodos]);

    const handleAddProject = () => {
        if(titleInput !== ""){
            // as you see, we build another version of main data when i want to add new data
            const newTodo = {
                id: uuidv4(),
                title: titleInput,
                description: "",
                isCompleted: false,
            }
            
            const updatedTodo = [...todos,newTodo];
            setTodos(updatedTodo);

            // Step 1 in local-storage
            // as you see, we start to add data into local storage from setTodo
            localStorage.setItem("todosData",JSON.stringify(updatedTodo));
            setTitleInput("");
        }
    }

    return (
        <Card sx={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',overflow:"scroll" }} className='cursor-pointer my-5 w-full max-h-[80vh]'> {/* shadow-xl/30 why not worked here? */}
            <CardContent className="my-2">
                {/* Typography rather than heading elements */}
                <Typography variant='h4' className={flexStyle}> <span className='text-sky-600' >Github</span> Helper <InsightsIcon sx={{ fontSize: '35px' }} className='text-sky-600' /> </Typography>
                
                <Divider />
                
                {/* value={displayTodoType} same active button idea */}
                <ToggleButtonGroup color='primary' onChange={changeDisplayedTodo} value={displayTodoType} exclusive aria-label="text alignment" className='w-full flex justify-center items-center my-5 max-sm:flex-col max-sm:gap-3'>
                    <ToggleButton value="all"    className={flexStyle}> <FormatAlignJustifyOutlinedIcon /> All Projects </ToggleButton>
                    <ToggleButton value="completed"  className={flexStyle}> <LibraryAddCheckIcon /> Completed </ToggleButton>
                    <ToggleButton value="uncompleted"   className={flexStyle}> <AutorenewIcon /> In Progress </ToggleButton>
                </ToggleButtonGroup>

                {
                    todoArr.length === 0 ? 
                    <div className='w-full flex justify-center items-center'> 
                        <div className='text-gray-500 text-center max-w-[300px]'>Start by adding your first project to begin managing your tasks efficiently.</div>
                    </div> : todoArr
                }
                
                <Grid container spacing={2} className="my-4">
                    <Grid size={8}>
                        <TextField value={titleInput} onChange={(event) => setTitleInput(event.target.value)} className="w-full" id="outlined-basic" label="project name" variant="outlined" />
                    </Grid>
                    <Grid size={4}>
                        <Button disabled={titleInput.length === 0} onClick={handleAddProject} variant="outlined" className="w-full h-full" startIcon={<AddIcon />}> Add Project </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}