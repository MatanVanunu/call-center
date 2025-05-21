import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import {
  cloneElement,
  isValidElement,
  useState,
  type ReactElement,
} from 'react';
import { useTags } from '../hooks/useTags';
import type { Tag } from '../types/tags';
import Modal from '../../../ui/Modal';
import TagItem from '../../../ui/TagItem';

const Button = styled(MdAdd)`
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

interface InputProps {
  currentTagsIds: Tag[];
  applyTag: (tagId: string) => void;
  trigger?: ReactElement;
}

const TagResource = ({ currentTagsIds, applyTag, trigger }: InputProps) => {
  const { tags } = useTags();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const currentIdsSet = new Set(currentTagsIds.map((t) => t.id));
  const options = tags?.filter((tag) => !currentIdsSet.has(tag.id));

  const triggerWithOnClick = isValidElement(trigger) ? (
    cloneElement(trigger as ReactElement<{ onClick?: () => void }>, {
      onClick: () => setIsOpen(true),
    })
  ) : (
    <Button size={24} onClick={() => setIsOpen(true)} />
  );

  return (
    <>
      {triggerWithOnClick}

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
