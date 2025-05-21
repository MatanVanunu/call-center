import ListContainer from '../../../ui/ListContainer';
import { useTags } from '../hooks/useTags';
import TagListItem from './TagListItem';

const TagList = () => {
  const { tags } = useTags();

  return (
    <ListContainer>
      {tags?.map((tag) => (
        <TagListItem key={tag.id} tag={tag} />
      ))}
    </ListContainer>
  );
};

export default TagList;
