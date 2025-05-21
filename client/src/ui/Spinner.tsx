import styled from 'styled-components';

const StyledSpinner = styled.div`
  border: 0.5rem solid #f3f3f3;
  border-top: 0.5rem solid var(--purple-primary);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return <StyledSpinner />;
};

export default Spinner;
