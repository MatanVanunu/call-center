import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateTaskInput, Task } from '../types/tasks';
import type { AxiosError } from 'axios';
import { createTaskApi } from '../api/tasks';

export const useCreateTask = () => {
  const queyClient = useQueryClient();

  const { mutate: createTask } = useMutation<Task, AxiosError, CreateTaskInput>(
    {
      mutationFn: createTaskApi,
      onSuccess: (_data, variables) => {
        queyClient.invalidateQueries({ queryKey: ['tasks', variables.callId] });
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return { createTask };
};
