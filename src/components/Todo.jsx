import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { TodoContext } from '../contexts/TodoContext';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button';


const Todo = ({todo}) => {
    const {todos, setTodos} = React.useContext(TodoContext)
    const [open, setOpen] = React.useState(!false);

    const handleCheckClick = ( ) => {
        const updatedTodo = todos.map((t) => {
            if(t.id ===  todo.id)
                t.isCompleted = !t.isCompleted;
            return t;
        });
        setTodos(updatedTodo);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    

    return (
        // sx: style
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title" 
                aria-describedby="alert-dialog-description">
        
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
                </DialogContent>

                <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose} autoFocus>
                    Agree
                </Button>
                </DialogActions>
            
            </Dialog>

            {/* Main todo card */}
            <Card className='cursor-pointer border-sky-600 border hover:shadow-xl transCard hover:py-2 my-3' sx={{minWidth:257}}>
                <CardContent className="my-2">
                    <Grid container spacing={2}>
                        <Grid size={8}> 
                            <Typography variant='h5'> {todo.title} </Typography>
                            <Typography className="text-[20px] max-sm:text-[14px]"> {todo.description} </Typography>
                        </Grid>

                        {/* Use IconButton component rather than icon as normal */}
                        <Grid size={4} display="flex" justifyContent="space-around" alignItems="center" className="max-sm:flex-col max-sm:gap-3"> 
                            <IconButton aria-label="delete" style={{ color:"red", border:"solid #ff1744 1px" }} > <DeleteIcon /> </IconButton>
                            
                            <IconButton aria-label="edit" style={{ color:"black", border:"solid #424242 1px" }} > <ModeEditOutlineOutlinedIcon /> </IconButton>
                            
                            <IconButton onClick={handleCheckClick} aria-label="check" style={{
                                    color:todo.isCompleted? "white" : "#43a047",
                                    background: todo.isCompleted? "#43a047" : "white",
                                    border:"solid #43a047 1px"
                                }}>
                                <DoneIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                    
                </CardContent>
            </Card>
        </>
    );
}

export default Todo