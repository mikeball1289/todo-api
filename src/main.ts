import express from 'express';
import { createServer } from 'http';
import readTodos from './readTodos';
import writeTodos from './writeTodos';

const app = express();

app.use('/todos', readTodos);
app.use('/api', writeTodos);

createServer(app).listen(8080, () => console.log('server started on http://localhost:8080'));
