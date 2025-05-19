import styled from 'styled-components';
import Button from '../../../ui/Button';
import { useState } from 'react';
import { useCreateTag } from '../hooks/useCreateTag';
import FormRow from '../../../ui/FormRow';

const Container = styled.form`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: var(--border);
  border-radius: 0.5rem;
`;

const Span = styled.span`
  font-weight: 600;
`;

const Input = styled.input`
  padding: 0.5rem;
  width: 100%;
`;

const CreateTagForm = () => {
  const [name, setName] = useState<string>('');
  const { createTag } = useCreateTag();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    createTag({ name });
    setName('');
  };

  return (
    <Container onSubmit={handleSubmit}>
      <FormRow>
        <Span>Name</Span>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormRow>
      <Button>Submit</Button>
    </Container>
  );
};

export default CreateTagForm;
