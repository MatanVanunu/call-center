import styled from 'styled-components';
import { MdEdit } from 'react-icons/md';
import { IoMdCheckmark } from 'react-icons/io';
import type { Tag } from '../types/tags';
import { useState } from 'react';
import { useUpdateTag } from '../hooks/useUpdateTag';

const Body = styled.li`
  all: unset;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--purple-secondary);
`;

const Operations = styled.div`
  svg {
    cursor: pointer;
  }
`;

interface InputProps {
  tag: Tag;
}

const TagListItem = ({ tag }: InputProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [name, setName] = useState<string>(tag.name);
  const { updateTag } = useUpdateTag();

  const handleSave = () => {
    if (name !== tag.name) {
      updateTag({ id: tag.id, dto: { name } });
    }
    setEdit(false);
  };

  return (
    <Body>
      {edit ? (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      ) : (
        <span>{tag.name}</span>
      )}
      <Operations>
        {edit ? (
          <IoMdCheckmark size={24} onClick={handleSave} />
        ) : (
          <MdEdit size={24} onClick={() => setEdit((prev) => !prev)} />
        )}
      </Operations>
    </Body>
  );
};

export default TagListItem;
