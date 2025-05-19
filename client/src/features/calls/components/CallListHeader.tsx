import styled from 'styled-components';
import CreateCall from './CreateCall';

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5rem;
`;

const Title = styled.span`
  font-size: 1.5rem;
`;

const CallListHeader = () => {
  return (
    <Body>
      <Title>Calls</Title>
      <CreateCall />
    </Body>
  );
};

export default CallListHeader;
