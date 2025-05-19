import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateTagInput, Tag } from '../types/tags';
import type { AxiosError } from 'axios';
import { createTagApi } from '../api/tags';

export const useCreateTag = () => {
  const queryClient = useQueryClient();
  const { mutate: createTag } = useMutation<Tag, AxiosError, CreateTagInput>({
    mutationFn: createTagApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tags'] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { createTag };
};
