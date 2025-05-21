import styled from 'styled-components';
import Button from '../../../ui/Button';
import Input from '../../../ui/Input';
import { useState } from 'react';
import { useCreateCall } from '../hooks/useCreateCall';
import Modal from '../../../ui/Modal';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
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
      <Modal visible={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>New Call</Modal.Header>
        <StyledForm onSubmit={handleSubmit}>
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
      </Modal>
    </>
  );
};

export default CreateCall;
