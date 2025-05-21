import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useState } from 'react';
import { useTags } from '../hooks/useTags';
import type { Tag } from '../types/tags';
import Modal from '../../../ui/Modal';

const Button = styled(MdAdd)`
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TagItem = styled.span`
  background-color: var(--purple-secondary);
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

interface InputProps {
  currentTagsIds: Tag[];
  applyTag: (tagId: string) => void;
}

const TagResource = ({ currentTagsIds, applyTag }: InputProps) => {
  const { tags } = useTags();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const currentIdsSet = new Set(currentTagsIds.map((t) => t.id));
  const options = tags?.filter((tag) => !currentIdsSet.has(tag.id));

  return (
    <>
      <Button size={24} onClick={() => setIsOpen(true)}>
        New Task
      </Button>
      <Modal visible={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>Apply Tag</Modal.Header>
        <Container>
          {options?.map((tag) => (
            <TagItem onClick={() => applyTag(tag.id)} key={tag.id}>
              {tag.name}
            </TagItem>
          ))}
        </Container>
      </Modal>
    </>
  );
};

export default TagResource;
