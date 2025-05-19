import styled from 'styled-components';
import Button from '../../../ui/Button';
import CustomModal from '../../../ui/CustomModal';
import Input from '../../../ui/Input';
import { useState } from 'react';
import { useCreateCall } from '../hooks/useCreateCall';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
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

const CreateCall = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const { createCall } = useCreateCall();

  const clear = () => {
    setName('');
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createCall({ name });
    clear();
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>New</Button>
      <CustomModal open={isOpen} onClose={() => setIsOpen(false)}>
        <StyledForm onSubmit={handleSubmit}>
          <Title>Create a New Call</Title>
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

export default CreateCall;
