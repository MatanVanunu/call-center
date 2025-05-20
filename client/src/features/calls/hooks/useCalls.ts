import { useQuery } from '@tanstack/react-query';
import { getCallsApi } from '../api/calls';
import type { CallSummary } from '../types/calls';

export const useCalls = () => {
  const { data: calls, isLoading: isLoadingCalls } = useQuery<CallSummary[]>({
    queryKey: ['calls'],
    queryFn: getCallsApi,
  });

  return { calls, isLoadingCalls };
};
