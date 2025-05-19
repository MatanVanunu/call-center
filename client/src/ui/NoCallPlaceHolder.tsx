import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;

const NoCallPlaceHolder = () => {
  return (
    <Container>
      <Span>Please Select a Call</Span>
    </Container>
  );
};

export default NoCallPlaceHolder;
