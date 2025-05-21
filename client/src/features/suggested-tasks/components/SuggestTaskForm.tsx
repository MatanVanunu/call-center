import styled from 'styled-components';
import useCreateSuggestedTask from '../hooks/useCreateSuggestedTask';
import FormRow from '../../../ui/FormRow';
import Button from '../../../ui/Button';
import { useState } from 'react';

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

const SuggestTaskForm = () => {
  const [name, setName] = useState<string>('');
  const { createSuggestedTask } = useCreateSuggestedTask();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    createSuggestedTask({ name });
    setName('');
  };

  return (
    <Container onSubmit={handleSubmit}>
      <FormRow>
        <Span>Content</Span>
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

export default SuggestTaskForm;
