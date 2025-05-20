import api from '../../../api/axios';
import type { Call, CallSummary, CreateCallInput } from '../types/calls';

export const getCallsApi = async (): Promise<CallSummary[]> => {
  const res = await api.get('/calls');
  return res.data;
};

export const createCallApi = async (
  dto: CreateCallInput
): Promise<CallSummary> => {
  const res = await api.post('/calls', dto);
  return res.data;
};

export const getCallApi = async (callId: string): Promise<Call> => {
  const res = await api.get(`/calls/${callId}`);
  return res.data;
};

export const unTagCallApi = async (callId: string, tagId: string) => {
  const res = await api.delete(`/calls/${callId}/tag/${tagId}`);
  return res.data;
};
