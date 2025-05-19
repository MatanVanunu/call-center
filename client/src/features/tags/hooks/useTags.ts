import { useQuery } from '@tanstack/react-query';
import { getTagsApi } from '../api/tags';
import type { Tag } from '../types/tags';

export const useTags = () => {
  const { data: tags, isLoading: isLoadingTags } = useQuery<Tag[]>({
    queryKey: ['tags'],
    queryFn: getTagsApi,
  });

  return { tags, isLoadingTags };
};
