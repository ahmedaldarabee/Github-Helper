import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButtons from './ToggleButton';
import InsightsIcon from '@mui/icons-material/Insights';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { TodoContext } from '../contexts/TodoContext';

export default function BasicCard() {
    const [titleInput,setTitleInput] = React.useState("");
    const flexStyle = 'flex justify-center items-center gap-2 p-2';
    const {todos,setTodos} = React.useContext(TodoContext);

    // to show all todos in body of card
    const todoArr = todos.map((project) => {
        return (
            <Todo key={project.id} todo={project}/>
        )
    })

    // as you see, we build another version of main data when i want to add new data
    const handleAddProject = () => {
        if(titleInput !==""){
            const newTodo = {
                id: uuidv4(),
                title: titleInput,
                description: "",
                isCompleted: false,
            }
            
            setTodos([...todos,newTodo]);
            setTitleInput("");
        }
    }

    return (
        <Card sx={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }} className='cursor-pointer my-5'> {/* shadow-xl/30 why not worked here? */}
            <CardContent className="my-2">
                {/* Typography rather than heading elements */}
                <Typography variant='h4' className={flexStyle}> 
                    Github Helper
                    <InsightsIcon sx={{ fontSize: '35px' }} />
                </Typography>
                
                <Divider />                
                <ToggleButtons />
                {todoArr}
                
                <Grid container spacing={2} className="my-4">
                    <Grid size={8}>
                        <TextField value={titleInput} onChange={(event) => setTitleInput(event.target.value)} className="w-full" id="outlined-basic" label="project name" variant="outlined" />
                    </Grid>
                    <Grid size={4}>
                        <Button onClick={handleAddProject} variant="outlined" className="w-full h-full" startIcon={<AddIcon />}> Add Project </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}