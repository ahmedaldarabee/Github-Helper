import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButtons from './ToggleButton';
import InsightsIcon from '@mui/icons-material/Insights';
import Todo from './Todo';
import AddTask from './AddTask';

export default function BasicCard() {

    const flexStyle = 'flex justify-center items-center gap-2 p-2';

    return (
        <Card sx={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }} className='cursor-pointer '> {/* shadow-xl/30 why not worked here? */}
            <CardContent className="my-2">
                {/* Typography rather than heading elements */}
                <Typography variant='h4' className={flexStyle}> 
                    Github Helper
                    <InsightsIcon sx={{ fontSize: '35px' }} />
                </Typography>
                
                <Divider />                
                <ToggleButtons />
                <Todo />
                <AddTask />
            </CardContent>
        </Card>
    );
}