import styled from 'styled-components';
import CallTagListItem from './CallTagListItem';
import { MdAdd } from 'react-icons/md';
import { useCall } from '../hooks/useCall';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 30%;
  gap: 1rem;
  border: var(--border);
  border-radius: 0.5rem;
  padding: 0.5rem;
  align-items: center;
`;

const CallTagList = () => {
  const { call } = useCall();

  if (!call) return null;

  return (
    <Container>
      <span>Tags</span>
      {call.tags?.map((tag) => (
        <CallTagListItem key={tag.id} tag={tag} callId={call.id} />
      ))}
      <MdAdd size={24} />
    </Container>
  );
};

export default CallTagList;
