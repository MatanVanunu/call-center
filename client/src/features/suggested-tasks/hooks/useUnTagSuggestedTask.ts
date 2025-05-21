import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { UnTagSuggestedTaskInput } from '../types/suggested-tasks';
import { unTagSuggestedTaskApi } from '../api/suggested-tasks';

export const useUnTagSuggestedTask = () => {
  const queryClient = useQueryClient();
  const { mutate: unTagSuggestedTask } = useMutation<
    void,
    AxiosError,
    UnTagSuggestedTaskInput
  >({
    mutationFn: unTagSuggestedTaskApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['suggested-tasks'] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { unTagSuggestedTask };
};
