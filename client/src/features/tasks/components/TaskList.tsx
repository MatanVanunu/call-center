import styled from 'styled-components';
import { useTasks } from '../hooks/useTasks';
import TaskListItem from './TaskListItem';
import CreateTask from './CreateTask';

const Column = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-right: var(--border);
  padding-right: 0.5rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
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
`;

const Span = styled.span`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
`;

const TaskList = () => {
  const { tasks } = useTasks();

  if (!tasks) return null;

  return (
    <Column>
      <Header>
        <Title>Tasks</Title>
        <CreateTask />
      </Header>
      {tasks.length > 0 ? (
        <List>
          {tasks.map((task) => (
            <TaskListItem key={task.id} task={task} />
          ))}
          {tasks.length === 0 && <Span>No Tasks</Span>}
        </List>
      ) : (
        <Span>No Tasks</Span>
      )}
    </Column>
  );
};

export default TaskList;
