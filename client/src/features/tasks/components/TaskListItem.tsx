import styled from 'styled-components';
import type { Task } from '../types/tasks';
import TaskStatusSelect from './TaskStatusSelect';

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
  task: Task;
}

const TaskListItem = ({ task }: InputProps) => {
  return (
    <Body>
      <span>{task.name}</span>
      <TaskStatusSelect task={task} />
    </Body>
  );
};

export default TaskListItem;
