import styled from 'styled-components';
import type { Task } from '../types/tasks';

const Body = styled.li`
  all: unset;
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
    </Body>
  );
};

export default TaskListItem;
