import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { TagCallInput } from '../types/calls';
import { tagCallApi } from '../api/calls';

export const useTagCall = () => {
  const queryClient = useQueryClient();

  const { mutate: tagCall } = useMutation<void, AxiosError, TagCallInput>({
    mutationFn: tagCallApi,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['call', variables.callId] });
      queryClient.invalidateQueries({
        queryKey: ['suggested-tasks', variables.callId],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { tagCall };
};
