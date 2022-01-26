export enum TaskStatus {
    todo = 'todo',
    inProgress = 'in-progress',
    done = 'done'
}

export interface taskTypes {
    title: string,
    description: string,
    addTime: string,
    id: number,
    status: TaskStatus
}
