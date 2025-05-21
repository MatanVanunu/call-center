import styled from 'styled-components';
import type { SuggectedTask } from '../types/suggested-tasks';
import STHeader from './STHeader';
import STaskTagList from './STaskTagList';

const Container = styled.li`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: var(--border);
  border-radius: 0.5rem;
`;

interface InputProps {
  suggestedTask: SuggectedTask;
}

const SuggestedTaskListItem = ({ suggestedTask }: InputProps) => {
  return (
    <Container>
      <STHeader suggestedTask={suggestedTask} />
      <STaskTagList suggestedTask={suggestedTask} />
    </Container>
  );
};

export default SuggestedTaskListItem;
