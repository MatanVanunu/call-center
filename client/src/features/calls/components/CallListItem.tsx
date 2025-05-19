import styled from 'styled-components';
import type { Call } from '../types/calls';
import { Link } from 'react-router-dom';

const Item = styled.li`
  list-style: none;
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 0.5rem;
  border: var(--border);
  border-radius: 0.5rem;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #f2f2f2;
  }

  &:focus-visible {
    outline: 2px solid blue;
  }
`;

interface InputProps {
  call: Call;
}

const CallListItem = ({ call }: InputProps) => {
  return (
    <Item>
      <StyledLink to={`/calls/${call.id}`}>
        <span>{call.name}</span>
      </StyledLink>
    </Item>
  );
};

export default CallListItem;
