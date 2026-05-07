export type Todo = {
    userId: number;
    completed: boolean;
    title: string;
    id: number;
    priority: 'low' | 'medium' | 'high';
}