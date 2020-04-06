import express from 'express';
import { createServer } from 'http';

const app = express();

function wait(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
}

let count = 0;
app.get('/', async (req, res) => {
    await wait(2000);
    res.end(`hello world ${++ count}`);
});

createServer(app).listen(8080, () => console.log('server started on http://localhost:8080'));