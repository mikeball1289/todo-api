import { Router } from 'express';
import { todos } from './data';

const router = Router();

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