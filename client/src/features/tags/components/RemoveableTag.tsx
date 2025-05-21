import styled from 'styled-components';
import { RxCross2 } from 'react-icons/rx';
import type { Tag } from '../../tags/types/tags';

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
  onRemove: (tagId: string) => void;
}

const RemoveableTag = ({ tag, onRemove }: InputProps) => {
  return (
    <Body>
      {tag.name}
      <RxCross2 size={24} onClick={() => onRemove(tag.id)} />
    </Body>
  );
};

export default RemoveableTag;
