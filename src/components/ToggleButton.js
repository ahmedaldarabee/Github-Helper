import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatAlignJustifyOutlinedIcon from '@mui/icons-material/FormatAlignJustifyOutlined';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import AutorenewIcon from '@mui/icons-material/Autorenew';


export default function ToggleButtons() {
    const flexStyle = 'flex justify-center items-center gap-2 ';
    return (
        <ToggleButtonGroup
            exclusive
            aria-label="text alignment"
            className='w-full flex justify-center items-center my-5 max-sm:flex-col max-sm:gap-3'
        >
        <ToggleButton value="left"  className={flexStyle}>
            <FormatAlignJustifyOutlinedIcon />
            All Projects
        </ToggleButton>

        <ToggleButton value="center"  className={flexStyle}>
            <LibraryAddCheckIcon />
            Completed
        </ToggleButton>
        
        <ToggleButton value="right"  className={flexStyle}>
            <AutorenewIcon />
            In Progress
        </ToggleButton>
        
        </ToggleButtonGroup>
    );
}