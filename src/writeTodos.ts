import { Router } from 'express';
import { todos, TodoItem, Status } from './data';
import * as bodyParser from 'body-parser';

const router = Router();

router.use(bodyParser.json());

const validStatuses = Object.keys(Status).map((k: any) => (Status as any)[k]);

function isValidStatus(status: string): status is Status {
    return validStatuses.includes(status)
}

function isTodoItem(obj: any): obj is TodoItem {
    if (obj == null) return false;
    if (!obj.hasOwnProperty('status') || !obj.hasOwnProperty('title')) return false;
    if (!isValidStatus(obj.status)) return false;
    if (typeof obj.title !== 'string') return false;
    return true;
}

router.post('/item', (req, res) => {
    console.log(req.body);
    const body = req.body;
    if (isTodoItem(body)) {
        todos.push({
            status: body.status,
            title: body.title
        });
    }
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(todos));
});

router.post('/item/:id/status/:status', (req, res) => {
    const idx = Number(req.params.id);
    const status = req.params.status;
    if (!isNaN(idx) && idx >= 0 && idx < todos.length && 
        isValidStatus(status)) {
            todos[idx].status = status;
    }
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(todos));
});

export default router;