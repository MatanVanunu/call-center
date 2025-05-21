export interface Task {
  id: string;
  name: string;
  status: TaskStatus;
  callId: string;
  suggestedTaskId: string | null;
}

export interface CreateTaskInput {
  callId: string;
  dto: {
    name: string;
  };
}

export interface UpdateTaskInput {
  callId: string;
  taskId: string;
  dto: {
    status?: TaskStatus;
    name?: string;
  };
}

export interface CreateTaskFromSuggestionInput {
  callId: string;
  suggestedTaskId: string;
}

export const TaskStatus = {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
} as const;

export type TaskStatus = keyof typeof TaskStatus;
