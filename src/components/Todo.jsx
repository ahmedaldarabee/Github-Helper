import * as React from 'react';
import { TodoContext } from '../contexts/TodoContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';


const Todo = ({todo}) => {
    const {todos, setTodos} = React.useContext(TodoContext)
    
    // for delete dialog
    const [open, setOpen] = React.useState(false);

    // for update dialog
    const [ showUpdateDialog , setShowUpdateDialog ] = React.useState(false);

    // as you see how we can build new section just about section that we want to update it!
    const [updatedTodo , setUpdatedTodo] = React.useState({
        title: todo.title,
        description: todo.description
    });

    const handleCheckClick = ( ) => {
        const updatedTodo = todos.map((t) => {
            if(t.id === todo.id) t.isCompleted = !t.isCompleted;
            return t;
        });
        setTodos(updatedTodo);
        localStorage.setItem("todosData",JSON.stringify(updatedTodo));
    }

    // for deleting dialog
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleDeleteClose = () => {
        setOpen(false);
    };
    
    const deleteProjectHandler = () => {
        const updatedTodo = todos.filter((project) => project.id !== todo.id);
        setTodos(updatedTodo);
        localStorage.setItem("todosData",JSON.stringify(updatedTodo));
    }

    // for update dialog

    const handleUpdateClick = () => {
        setShowUpdateDialog(true);
    }

    const handleUpdateClose = () => {
        setShowUpdateDialog(false);
    };

    const handleUpdateConfirmation = () => {
        const updatedTodosFn = todos.map((td) => {
            // todo.id: current todo that have the action
            // td.id ->  all todo id's in array
            if(td.id === todo.id){
                return {...todo,title: updatedTodo.title , description: updatedTodo.description};
            }else{
                return td;
            }
        })

        setTodos(updatedTodosFn);
        localStorage.setItem("todosData",JSON.stringify(updatedTodosFn));
        handleUpdateClose();
    };

    return (
        // sx: style
        <>
            {/* Deletion Icon */}
            <Dialog
                open={open}
                onClose={handleDeleteClose}
                aria-labelledby="alert-dialog-title" 
                aria-describedby="alert-dialog-description">
        
                <DialogTitle id="alert-dialog-title">
                    {"Delete GitHub Project?"}
                </DialogTitle>
                
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        are you sure about removing this GitHub project from this list, where there is not way to recover after deletion to this project.
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleDeleteClose}>Cancel</Button>
                    <Button onClick={deleteProjectHandler} autoFocus>Delete</Button>
                </DialogActions>
            
            </Dialog>
            
            {/* Updating Icon */}
            <Dialog
                open={showUpdateDialog}
                onClose={handleUpdateClose}>

                <DialogTitle>Edit Project Name</DialogTitle>
                
                <DialogContent>
                    <DialogContentText> To Edit project name, you will see new changes that appear, so here try to add new name to your project </DialogContentText>
                    
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        label="Change Project Name"
                        fullWidth
                        variant="standard"
                        value={updatedTodo.title}
                        onChange={(e) => setUpdatedTodo({...updatedTodo,title: e.target.value})}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        label="Change Project Description"
                        fullWidth
                        variant="standard"
                        value={updatedTodo.description}
                        // ,description: e.target.value
                        // لاحظ بهذا الجزء كيف بتم تحديث فقط الجزء المطلوب من دون ميتم تحديد كل العناصر حتى لو ما بدي احدثهم
                        onChange={(e) => setUpdatedTodo({...updatedTodo,description: e.target.value})}
                    />
                </DialogContent>
                
                    <DialogActions>
                        <Button onClick={handleUpdateClose}>Cancel</Button>
                        <Button onClick={handleUpdateConfirmation}>Done</Button>
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
                            <IconButton onClick={handleClickOpen} aria-label="delete" style={{ color:"red", border:"solid #ff1744 1px" }} > <DeleteIcon /> </IconButton>
                            
                            <IconButton onClick={handleUpdateClick} aria-label="edit" style={{ color:"black", border:"solid #424242 1px" }} > <ModeEditOutlineOutlinedIcon /> </IconButton>
                            
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