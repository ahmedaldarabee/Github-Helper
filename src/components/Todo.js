import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const Todo = () => {
    return (
        // sx: style
        <Card className='cursor-pointer border-sky-600 border hover:shadow-xl transCard hover:py-2' sx={{minWidth:257}}>
            <CardContent className="my-2">
                <Grid container spacing={2}>
                    <Grid size={8}> 
                        <Typography variant='h5'> SyncHand Project </Typography>
                        <Typography className="text-[20px] max-sm:text-[14px]"> projects and tasks management </Typography>
                    </Grid>

                    {/* Use IconButton component rather than icon as normal */}
                    <Grid size={4} display="flex" justifyContent="space-around" alignItems="center" className="max-sm:flex-col max-sm:gap-3"> 
                        <IconButton aria-label="delete" style={{ color:"red", border:"solid #ff1744 1px" }} > <DeleteIcon /> </IconButton>
                        <IconButton aria-label="edit" style={{ color:"black", border:"solid #424242 1px" }} > <ModeEditOutlineOutlinedIcon /> </IconButton>
                        <IconButton aria-label="check" style={{ color:"green", border:"solid #4caf50 1px" }} > <DoneIcon /> </IconButton>
                    </Grid>
                </Grid>
                
            </CardContent>
        </Card>
    );
}

export default Todo