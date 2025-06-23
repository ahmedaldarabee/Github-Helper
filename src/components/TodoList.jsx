import * as React from 'react';
import Container from '@mui/material/Container';
import BasicCard from './Card';
import { v4 as uuidv4 } from 'uuid';

// as you see, how we can using single object to simulate data between multi component
const todos = [{
        id: uuidv4(),
        title: "SyncHand Project",
        description:"Projects and Tasks management tool",
        isCompleted: false
    },{
        id: uuidv4(),
        title: "Github Helper",
        description:"Github projects management in simple way!",
        isCompleted: false
    }
]

export default function TodoList() {
    return (
        <Container maxWidth="md">
            <BasicCard />
        </Container>
    );
}