import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateTaskFromSuggestionInput, Task } from '../types/tasks';
import type { AxiosError } from 'axios';
import { createTaskFromSuggestionApi } from '../api/tasks';

export const useCreateTaskFromSuggestion = () => {
  const queyClient = useQueryClient();

  const { mutate: createTaskFromSuggestion } = useMutation<
    Task,
    AxiosError,
    CreateTaskFromSuggestionInput
  >({
    mutationFn: createTaskFromSuggestionApi,
    onSuccess: (_data, variables) => {
      queyClient.invalidateQueries({ queryKey: ['tasks', variables.callId] });
      queyClient.invalidateQueries({
        queryKey: ['suggested-tasks', variables.callId],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { createTaskFromSuggestion };
};
