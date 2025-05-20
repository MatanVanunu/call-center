import api from '../../../api/axios';
import type { Task } from '../types/tasks';

export const getTasksApi = async (callId: string): Promise<Task[]> => {
  const res = await api.get(`/calls/${callId}/tasks`);
  return res.data;
};
