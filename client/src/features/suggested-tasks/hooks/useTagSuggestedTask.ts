import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { TagSuggestedTaskInput } from '../types/suggested-tasks';
import { tagSuggestedTaskApi } from '../api/suggested-tasks';

export const useTagSuggestedTask = () => {
  const queryClient = useQueryClient();
  const { mutate: tagSuggestedTask } = useMutation<
    void,
    AxiosError,
    TagSuggestedTaskInput
  >({
    mutationFn: tagSuggestedTaskApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['suggested-tasks'] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { tagSuggestedTask };
};
