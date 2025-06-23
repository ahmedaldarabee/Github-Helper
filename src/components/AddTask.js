import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

const AddTask = () => {
    return (
        <>
            <Grid container spacing={2} className="my-4">
                <Grid size={8}>
                    <TextField className="w-full" id="outlined-basic" label="project name" variant="outlined" />
                </Grid>
                <Grid size={4}>
                    <Button variant="outlined" className="w-full h-full" startIcon={<AddIcon />}> Add Project </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default AddTask