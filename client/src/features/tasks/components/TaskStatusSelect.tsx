import styled from 'styled-components';
import { TaskStatus, type Task } from '../types/tasks';
import { useParams } from 'react-router-dom';
import { useUpdateTask } from '../hooks/useUpdateTask';
import { useState } from 'react';

const statusColors: Record<TaskStatus, string> = {
  OPEN: '#e0f7fa',
  IN_PROGRESS: '#fff3e0',
  COMPLETED: '#e8f5e9',
};

const StylesSelect = styled.select<{ $status: TaskStatus }>`
  padding: 0.5rem 1rem;
  border: var(--border);
  border-radius: 0.5rem;
  background-color: ${({ $status }) => statusColors[$status]};
  font-weight: 500;
  transition: var(--transition);

  option {
    all: unset;
    background-color: white;
    color: black;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

const TaskStatusLabels: Record<TaskStatus, string> = {
  OPEN: 'Open',
  IN_PROGRESS: 'In Progress',
  COMPLETED: 'Completed',
};

interface InputProps {
  task: Task;
}

const TaskStatusSelect = ({ task }: InputProps) => {
  const { callId } = useParams();
  const { updateTask } = useUpdateTask();

  const [status, setStatus] = useState<TaskStatus>(task.status);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as TaskStatus;
    setStatus(newStatus);

    if (callId) {
      updateTask({
        callId,
        taskId: task.id,
        dto: {
          status: newStatus,
        },
      });
    }
  };

  return (
    <StylesSelect $status={status} value={status} onChange={handleChange}>
      {Object.keys(TaskStatus).map((key) => (
        <option key={key} value={key}>
          {TaskStatusLabels[key as TaskStatus]}
        </option>
      ))}
    </StylesSelect>
  );
};

export default TaskStatusSelect;
