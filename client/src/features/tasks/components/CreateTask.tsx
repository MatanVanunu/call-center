import styled from 'styled-components';
import Button from '../../../ui/Button';
import { useState } from 'react';
import { useCreateTask } from '../hooks/useCreateTask';
import CustomModal from '../../../ui/CustomModal';
import { useParams } from 'react-router-dom';
import Input from '../../../ui/Input';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
`;

const Title = styled.span`
  font-size: 2rem;
`;

const Span = styled.span`
  font-weight: 600;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const CreateTask = () => {
  const { callId } = useParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const { createTask } = useCreateTask();

  const clear = () => {
    setName('');
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (callId) {
      createTask({ callId, dto: { name } });
      clear();
    }
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>New Task</Button>
      <CustomModal open={isOpen} onClose={() => setIsOpen(false)}>
        <StyledForm onSubmit={handleSubmit}>
          <Title>Create a New Task</Title>
          <Row style={{ width: '100%' }}>
            <Span>Name</Span>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Row>
          <Button>Create</Button>
        </StyledForm>
      </CustomModal>
    </>
  );
};

export default CreateTask;
