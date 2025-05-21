import styled from 'styled-components';
import Button from '../../../ui/Button';
import type { SuggectedTask } from '../../suggested-tasks/types/suggested-tasks';
import { useParams } from 'react-router-dom';
import { useCreateTaskFromSuggestion } from '../hooks/useCreateTaskFromSuggestion';

const Body = styled.li`
  all: unset;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border: var(--border);
  border-radius: 0.5rem;
`;

interface InputProps {
  suggestedTask: SuggectedTask;
}

const TaskSuggestionsItem = ({ suggestedTask }: InputProps) => {
  const { callId } = useParams();
  const { createTaskFromSuggestion } = useCreateTaskFromSuggestion();

  if (!callId) return null;

  const handleCreateTask = () => {
    createTaskFromSuggestion({ callId, suggestedTaskId: suggestedTask.id });
  };

  return (
    <Body>
      <span>{suggestedTask.name}</span>
      <Button onClick={handleCreateTask}>Add To Tasks</Button>
    </Body>
  );
};

export default TaskSuggestionsItem;
