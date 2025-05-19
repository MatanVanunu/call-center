import api from '../../../api/axios';
import type { Call, CreateCallInput } from '../types/calls';

export const getCallsApi = async (): Promise<Call[]> => {
  const res = await api.get('/calls');
  return res.data;
};

export const createCallApi = async (dto: CreateCallInput): Promise<Call> => {
  const res = await api.post('/calls', dto);
  return res.data;
};
