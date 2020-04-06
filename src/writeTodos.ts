import { Router } from 'express';
import { todos, TodoItem, Status } from './data';
import * as bodyParser from 'body-parser';

const router = Router();

router.use(bodyParser.json());

function isTodoItem(obj: any): obj is TodoItem {
    if (obj == null) return false;
    if (!obj.hasOwnProperty('status') || !obj.hasOwnProperty('title')) return false;
    if (!Object.keys(Status).map((k: any) => (Status as any)[k]).includes(obj.status)) return false;
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
    res.end(JSON.stringify(todos));
});

export default router;