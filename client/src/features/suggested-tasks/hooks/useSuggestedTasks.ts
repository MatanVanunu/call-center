import { useQuery } from '@tanstack/react-query';
import { getSuggestedTasksApi } from '../api/suggested-tasks';
import type { SuggectedTask } from '../types/suggested-tasks';

export const useSuggestedTasks = (callId?: string) => {
  const { data: suggestedTasks, isLoading: isLoadingSuggestedTasks } = useQuery<
    SuggectedTask[]
  >({
    queryKey: ['suggested-tasks', callId],
    queryFn: () => getSuggestedTasksApi(callId),
  });

  return { suggestedTasks, isLoadingSuggestedTasks };
};
