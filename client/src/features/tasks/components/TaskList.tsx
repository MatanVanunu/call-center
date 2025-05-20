import styled from 'styled-components';
import { useTasks } from '../hooks/useTasks';
import TaskListItem from './TaskListItem';

const List = styled.ul`
  all: unset;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
`;

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <List>
      {tasks?.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </List>
  );
};

export default TaskList;
