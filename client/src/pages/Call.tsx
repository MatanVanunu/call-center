import styled from 'styled-components';
import { useCall } from '../features/calls/hooks/useCall';
import CallTagList from '../features/calls/components/CallTagList';
import TasksSection from '../features/tasks/components/TasksSection';

const Container = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: var(--border);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Header = styled.span`
  font-size: 1.5rem;
  font-style: italic;
  text-transform: capitalize;
`;

const Call = () => {
  const { call } = useCall();

  if (!call) return null;

  return (
    <Container>
      <Header>{call.name}</Header>
      <CallTagList />
      <TasksSection />
    </Container>
  );
};

export default Call;
