import styled from 'styled-components';
import { MdEdit } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import { IoMdCheckmark } from 'react-icons/io';
import type { Tag } from '../types/tags';
import { useState } from 'react';
import { useUpdateTag } from '../hooks/useUpdateTag';
import { useDeleteTag } from '../hooks/useDeleteTag';

const Body = styled.li`
  all: unset;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--purple-secondary);
  align-items: center;
`;

const Operations = styled.div`
  display: flex;
  gap: 1rem;
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
  const { deleteTag } = useDeleteTag();

  const handleSave = () => {
    if (name !== tag.name) {
      updateTag({ id: tag.id, dto: { name } });
    }
    setEdit(false);
  };

  const handleDelete = () => {
    deleteTag(tag.id);
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
        <FaTrash size={24} onClick={handleDelete} />
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
