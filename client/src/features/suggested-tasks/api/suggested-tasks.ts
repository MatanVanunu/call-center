import api from '../../../api/axios';
import type {
  CreateSuggestedTaskInput,
  SuggectedTask,
  TagSuggestedTaskInput,
  UnTagSuggestedTaskInput,
} from '../types/suggested-tasks';

export const createSuggestedTaskApi = async (
  dto: CreateSuggestedTaskInput
): Promise<SuggectedTask> => {
  const res = await api.post('/suggested-tasks', dto);
  return res.data;
};

export const getSuggestedTasksApi = async (
  callId?: string
): Promise<SuggectedTask[]> => {
  const res = await api.get('suggested-tasks', {
    params: callId ? { callId } : {},
  });

  return res.data;
};

export const deleteSuggestedTaskApi = async (stId: string): Promise<void> => {
  await api.delete(`/suggested-tasks/${stId}`);
};

export const tagSuggestedTaskApi = async ({
  suggestedTaskId,
  tagId,
}: TagSuggestedTaskInput): Promise<void> => {
  await api.post(`/suggested-tasks/${suggestedTaskId}/tag`, {
    tagId,
  });
};

export const unTagSuggestedTaskApi = async ({
  suggestedTaskId,
  tagId,
}: UnTagSuggestedTaskInput): Promise<void> => {
  await api.delete(`/suggested-tasks/${suggestedTaskId}/tag/${tagId}`);
};
