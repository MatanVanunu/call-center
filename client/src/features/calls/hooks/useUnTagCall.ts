import { useMutation, useQueryClient } from '@tanstack/react-query';
import { unTagCallApi } from '../api/calls';

export const useUnTagCall = (callId: string, tagId: string) => {
  const queryClient = useQueryClient();

  const { mutate: unTagCall } = useMutation({
    mutationFn: () => unTagCallApi(callId, tagId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['call', callId] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { unTagCall };
};
