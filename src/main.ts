import express from 'express';
import { createServer } from 'http';

const app = express();

function wait(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
}

app.get('/', async (req, res) => {
    res.end(`hot reload is fun!`);
});

createServer(app).listen(8080, () => console.log('server started on http://localhost:8080'));
