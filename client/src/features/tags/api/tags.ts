import api from '../../../api/axios';
import type { CreateTagInput, Tag, UpdateTagInput } from '../types/tags';

export const createTagApi = async (dto: CreateTagInput): Promise<Tag> => {
  const res = await api.post('/tags', dto);
  return res.data;
};

export const getTagsApi = async (): Promise<Tag[]> => {
  const res = await api.get('/tags');
  return res.data;
};

export const updateTagApi = async ({
  id,
  dto,
}: UpdateTagInput): Promise<Tag> => {
  const res = await api.patch(`/tags/${id}`, dto);
  return res.data;
};
