import styled from 'styled-components';
import CallList from './CallList';
import CallListHeader from './CallListHeader';

const Body = styled.aside`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  border: var(--border);
  padding: 0.5rem;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
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
