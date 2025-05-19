import { useQuery } from '@tanstack/react-query';
import { getCallsApi } from '../api/calls';

export const useCalls = () => {
  const { data: calls, isLoading: isLoadingCalls } = useQuery({
    queryKey: ['calls'],
    queryFn: getCallsApi,
  });

  return { calls, isLoadingCalls };
};
