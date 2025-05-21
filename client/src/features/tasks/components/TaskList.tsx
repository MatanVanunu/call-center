import styled from 'styled-components';
import { useTasks } from '../hooks/useTasks';
import TaskListItem from './TaskListItem';
import CreateTask from './CreateTask';

const List = styled.ul`
  all: unset;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  font-size: 1.5rem;
`;

const TaskList = () => {
  const { tasks } = useTasks();

  if (!tasks) return null;

  return (
    <List>
      <Header>
        <Title>Tasks</Title>
        <CreateTask />
      </Header>

      {tasks.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </List>
  );
};

export default TaskList;
