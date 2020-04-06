import express from 'express';
import { createServer } from 'http';

const app = express();

enum Status {
    OPEN = 'open',
    PROGRESS = 'progress',
    COMPLETE = 'complete',
}

interface TodoItem {
    status: Status;
    title: string;
}

let todos: TodoItem[] = [{
    status: Status.PROGRESS,
    title: 'Make a todo list',
}, {
    status: Status.OPEN,
    title: 'Learn some nodejs',
}];

app.get('/todos', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(todos));
});

createServer(app).listen(8080, () => console.log('server started on http://localhost:8080'));
