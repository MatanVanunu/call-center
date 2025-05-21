import styled from 'styled-components';
import TaskList from './TaskList';
import TaskSuggestions from './TaskSuggestions';

const Container = styled.div`
  padding: 1rem;
  border: var(--border);
  border-radius: 0.5rem;
  height: 100%;
  overflow: hidden;
`;

const Lists = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const TasksSection = () => {
  return (
    <Container>
      <Lists>
        <TaskList />
        <TaskSuggestions />
      </Lists>
    </Container>
  );
};

export default TasksSection;
