import styled from 'styled-components';
import { useSuggestedTasks } from '../../suggested-tasks/hooks/useSuggestedTasks';
import { useParams } from 'react-router-dom';
import TaskSuggestionsItem from './TaskSuggestionsItem';

const List = styled.ul`
  all: unset;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
`;

const Title = styled.span`
  font-size: 1.5rem;
`;

const TaskSuggestions = () => {
  const { callId } = useParams();
  const { suggestedTasks } = useSuggestedTasks(callId);

  return (
    <List>
      <Title>Suggested Tasks</Title>
      {suggestedTasks?.map((t) => (
        <TaskSuggestionsItem key={t.id} suggestedTask={t} />
      ))}
    </List>
  );
};

export default TaskSuggestions;
