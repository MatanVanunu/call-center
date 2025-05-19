import styled from 'styled-components';
import { useTags } from '../hooks/useTags';
import TagListItem from './TagListItem';

const Container = styled.ul`
  all: unset;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TagList = () => {
  const { tags } = useTags();

  return (
    <Container>
      {tags?.map((tag) => (
        <TagListItem key={tag.id} tag={tag} />
      ))}
    </Container>
  );
};

export default TagList;
