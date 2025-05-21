import { useMutation, useQueryClient } from '@tanstack/react-query';
import type {
  CreateSuggestedTaskInput,
  SuggectedTask,
} from '../types/suggested-tasks';
import type { AxiosError } from 'axios';
import { createSuggestedTaskApi } from '../api/suggested-tasks';

export const useCreateSuggestedTask = () => {
  const queryClient = useQueryClient();
  const { mutate: createSuggestedTask } = useMutation<
    SuggectedTask,
    AxiosError,
    CreateSuggestedTaskInput
  >({
    mutationFn: createSuggestedTaskApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['suggested-tasks'] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { createSuggestedTask };
};

export default useCreateSuggestedTask;
