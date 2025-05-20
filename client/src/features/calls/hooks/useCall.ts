import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getCallApi } from '../api/calls';
import type { Call } from '../types/calls';

export const useCall = () => {
  const { callId } = useParams();

  const { data: call, isLoading: isLoadingCall } = useQuery<Call>({
    queryKey: ['call', callId],
    queryFn: () => getCallApi(callId!),
    enabled: !!callId,
  });

  return { call, isLoadingCall };
};
