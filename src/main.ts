import express from 'express';
import { createServer } from 'http';
import readTodos from './readTodos';

const app = express();

app.use('/todos', readTodos);

app.use('/', (req, res, next) => {
    console.log(req);
    next();
});

createServer(app).listen(8080, () => console.log('server started on http://localhost:8080'));
