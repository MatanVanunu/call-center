import styled from 'styled-components';
import { RxCross2 } from 'react-icons/rx';
import type { Tag } from '../../tags/types/tags';
import { useUnTagCall } from '../hooks/useUnTagCall';

const Body = styled.span`
  background-color: var(--purple-secondary);
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    cursor: pointer;
  }
`;

interface InputProps {
  tag: Tag;
  callId: string;
}

const CallTagListItem = ({ tag, callId }: InputProps) => {
  const { unTagCall } = useUnTagCall(callId, tag.id);

  return (
    <Body>
      {tag.name}
      <RxCross2 size={24} onClick={() => unTagCall()} />
    </Body>
  );
};

export default CallTagListItem;
