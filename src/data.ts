export enum Status {
    OPEN = 'open',
    PROGRESS = 'progress',
    COMPLETE = 'complete',
}

export interface TodoItem {
    status: Status;
    title: string;
}

export let todos: TodoItem[] = [{
    status: Status.PROGRESS,
    title: 'Make a todo list',
}, {
    status: Status.OPEN,
    title: 'Learn some nodejs',
}];
