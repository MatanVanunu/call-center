import { useMutation, useQueryClient } from '@tanstack/react-query';
import { unTagCallApi } from '../api/calls';
import type { AxiosError } from 'axios';
import type { UnTagCallInput } from '../types/calls';

export const useUnTagCall = () => {
  const queryClient = useQueryClient();

  const { mutate: unTagCall } = useMutation<void, AxiosError, UnTagCallInput>({
    mutationFn: unTagCallApi,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['call', variables.callId] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { unTagCall };
};
