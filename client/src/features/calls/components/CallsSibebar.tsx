import styled from 'styled-components';
import CallList from './CallList';
import CallListHeader from './CallListHeader';

const Body = styled.aside`
  all: unset;
  border-radius: 0.5rem;
  border: var(--border);
  padding: 0.5rem;
`;

const CallsSibebar = () => {
  return (
    <Body>
      <CallListHeader />
      <CallList />
    </Body>
  );
};

export default CallsSibebar;
