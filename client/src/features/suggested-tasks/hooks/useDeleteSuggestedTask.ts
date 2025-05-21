import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { deleteSuggestedTaskApi } from '../api/suggested-tasks';

export const useDeleteSuggestedTask = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteSuggestedTask } = useMutation<void, AxiosError, string>(
    {
      mutationFn: deleteSuggestedTaskApi,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['suggested-tasks'] });
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return { deleteSuggestedTask };
};
