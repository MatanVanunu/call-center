import styled, { css } from 'styled-components';
import type { CallSummary } from '../types/calls';
import { Link, useParams } from 'react-router-dom';

const Item = styled.li`
  list-style: none;
`;

interface LinkProps {
  $selected: boolean;
}

const StyledLink = styled(Link)<LinkProps>`
  display: block;
  padding: 0.5rem;
  border: var(--border);
  border-radius: 0.5rem;
  text-decoration: none;
  color: inherit;
  transition: var(--transition);

  &:hover {
    background-color: var(--gray-primary);
  }

  &:focus-visible {
    outline: 2px solid blue;
  }

  ${({ $selected }) =>
    $selected &&
    css`
      background-color: var(--gray-primary);
    `}
`;

interface InputProps {
  call: CallSummary;
}

const CallListItem = ({ call }: InputProps) => {
  const { callId } = useParams();
  const isSelected = callId === call.id;
  return (
    <Item>
      <StyledLink $selected={isSelected} to={`/calls/${call.id}`}>
        <span>{call.name}</span>
      </StyledLink>
    </Item>
  );
};

export default CallListItem;
