import styled from 'styled-components';
import { useSuggestedTasks } from '../../suggested-tasks/hooks/useSuggestedTasks';
import { useParams } from 'react-router-dom';
import TaskSuggestionsItem from './TaskSuggestionsItem';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  padding-left: 0.5rem;
`;

const Title = styled.span`
  font-size: 1.5rem;
`;

const List = styled.ul`
  all: unset;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
  height: 100%;
`;

const Span = styled.span`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
`;

const TaskSuggestions = () => {
  const { callId } = useParams();
  const { suggestedTasks } = useSuggestedTasks(callId);

  if (!suggestedTasks) return null;

  return (
    <Column>
      <Title>Suggested Tasks</Title>
      {suggestedTasks?.length > 0 ? (
        <List>
          {suggestedTasks?.map((t) => (
            <TaskSuggestionsItem key={t.id} suggestedTask={t} />
          ))}
        </List>
      ) : (
        <Span>No Suggestions For Set Tags</Span>
      )}
    </Column>
  );
};

export default TaskSuggestions;
