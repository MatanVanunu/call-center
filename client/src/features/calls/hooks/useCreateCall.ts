import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { CallSummary, CreateCallInput } from '../types/calls';
import { createCallApi } from '../api/calls';

export const useCreateCall = () => {
  const queryClient = useQueryClient();
  const { mutate: createCall } = useMutation<
    CallSummary,
    AxiosError,
    CreateCallInput
  >({
    mutationFn: createCallApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['calls'] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { createCall };
};
