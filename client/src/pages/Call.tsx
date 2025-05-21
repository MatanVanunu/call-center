import styled from 'styled-components';
import { useCall } from '../features/calls/hooks/useCall';
import CallTagList from '../features/calls/components/CallTagList';
import TasksSection from '../features/tasks/components/TasksSection';
import { Navigate } from 'react-router-dom';

const Container = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: var(--border);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
`;

const Header = styled.span`
  font-size: 1.5rem;
  font-style: italic;
  text-transform: capitalize;
`;

const Call = () => {
  const { call, isLoadingCall } = useCall();

  if (!call && !isLoadingCall) return <Navigate replace to={'/calls'} />;

  return (
    <Container>
      <Header>{call?.name}</Header>
      <CallTagList />
      <TasksSection />
    </Container>
  );
};

export default Call;
