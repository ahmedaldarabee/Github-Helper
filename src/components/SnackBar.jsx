import * as React from 'react';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SnackBarComponent({open,message}) {
    const [state, setState] = React.useState({
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal } = state;
    return (
        <Box sx={{ width: 500 }}>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                message="I love snacks"
                key={vertical + horizontal}
            >
                <Alert severity="success">{message}</Alert>
            </Snackbar>
        </Box>
    );
}
