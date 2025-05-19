import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Tag, UpdateTagInput } from '../types/tags';
import type { AxiosError } from 'axios';
import { updateTagApi } from '../api/tags';

export const useUpdateTag = () => {
  const queryClient = useQueryClient();
  const { mutate: updateTag } = useMutation<Tag, AxiosError, UpdateTagInput>({
    mutationFn: updateTagApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tags'] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { updateTag };
};
