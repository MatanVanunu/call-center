import styled from 'styled-components';

const Button = styled.button`
  all: unset;
  background-color: var(--purple-secondary);
  border-radius: 0.25rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: var(--purple-primary);
  }
`;

export default Button;
