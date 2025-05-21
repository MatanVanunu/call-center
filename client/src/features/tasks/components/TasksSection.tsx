import styled from 'styled-components';
import TaskList from './TaskList';
import CreateTask from './CreateTask';

const Container = styled.div`
  padding: 1rem;
  border: var(--border);
  border-radius: 0.5rem;
  height: 100%;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  font-size: 1.5rem;
`;

const Lists = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const TasksSection = () => {
  return (
    <Container>
      <Header>
        <Title>Tasks</Title>
        <CreateTask />
      </Header>
      <Lists>
        <TaskList />
        {/* <TaskList /> */}
      </Lists>
    </Container>
  );
};

export default TasksSection;
