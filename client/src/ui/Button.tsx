import styled from 'styled-components';

const Button = styled.button`
  all: unset;
  background-color: #b388ff;
  border-radius: 0.25rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #7e57c2;
  }
`;

export default Button;
