import api from '../../../api/axios';
import type {
  Task,
  UpdateTaskInput,
  CreateTaskInput,
  CreateTaskFromSuggestionInput,
} from '../types/tasks';

export const getTasksApi = async (callId: string): Promise<Task[]> => {
  const res = await api.get(`/calls/${callId}/tasks`);
  return res.data;
};

export const createTaskApi = async ({
  callId,
  dto,
}: CreateTaskInput): Promise<Task> => {
  const res = await api.post(`/calls/${callId}/tasks`, dto);
  return res.data;
};

export const updateTaskApi = async ({
  callId,
  taskId,
  dto,
}: UpdateTaskInput): Promise<Task> => {
  const res = await api.patch(`/calls/${callId}/tasks/${taskId}`, dto);
  return res.data;
};

export const createTaskFromSuggestionApi = async ({
  callId,
  suggestedTaskId,
}: CreateTaskFromSuggestionInput): Promise<Task> => {
  const res = await api.post(`/calls/${callId}/tasks/from-suggestion`, {
    suggestedTaskId,
  });
  return res.data;
};
