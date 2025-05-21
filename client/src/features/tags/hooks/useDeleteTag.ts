import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { deleteTagApi } from '../api/tags';

export const useDeleteTag = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTag } = useMutation<void, AxiosError, string>({
    mutationFn: deleteTagApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tags'] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { deleteTag };
};
