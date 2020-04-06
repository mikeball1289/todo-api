import { Router } from "express";

const router = Router();

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

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(todos));
});

router.get('/:id', (req, res) => {
    const idx = Number(req.params.id);
    if (isNaN(idx) || idx < 0 || idx >= todos.length) {
        res.status(400);
        res.end('Bad index');
    }
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(todos[idx]));
});

export default router;