import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getTasksApi } from '../api/tasks';

export const useTasks = () => {
  const { callId } = useParams();

  const { data: tasks, isLoading: isLoadingTasks } = useQuery({
    queryKey: ['tasks', callId],
    queryFn: () => getTasksApi(callId!),
    enabled: !!callId,
  });

  return { tasks, isLoadingTasks };
};
