import styled from 'styled-components';
import { useCalls } from '../hooks/useCalls';
import CallListItem from './CallListItem';

const List = styled.ul`
  all: unset;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  overflow: auto;
`;

const CallList = () => {
  const { calls } = useCalls();
  return (
    <List>
      {calls?.map((call) => (
        <CallListItem key={call.id} call={call} />
      ))}
    </List>
  );
};

export default CallList;
