import * as React from 'react';
import Container from '@mui/material/Container';
import BasicCard from './Card';

export default function TodoList() {
    return (
        <Container maxWidth="md">
            <BasicCard />
        </Container>
    );
}