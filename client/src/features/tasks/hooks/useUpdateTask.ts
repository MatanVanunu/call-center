import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Task, UpdateTaskInput } from '../types/tasks';
import type { AxiosError } from 'axios';
import { updateTaskApi } from '../api/tasks';

export const useUpdateTask = () => {
  const queyClient = useQueryClient();

  const { mutate: updateTask } = useMutation<Task, AxiosError, UpdateTaskInput>(
    {
      mutationFn: updateTaskApi,
      onSuccess: (_data, variables) => {
        queyClient.invalidateQueries({ queryKey: ['tasks', variables.callId] });
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return { updateTask };
};
