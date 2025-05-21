import styled from 'styled-components';
import RemoveableTag from '../../tags/components/RemoveableTag';
import { useUnTagSuggestedTask } from '../hooks/useUnTagSuggestedTask';
import type { SuggectedTask } from '../types/suggested-tasks';

const TagList = styled.ul`
  all: unset;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const EmptyListSpan = styled.span`
  font-style: italic;
`;

interface InputProps {
  suggestedTask: SuggectedTask;
}

const STaskTagList = ({ suggestedTask }: InputProps) => {
  const { unTagSuggestedTask } = useUnTagSuggestedTask();
  const handleRemove = (tagId: string) => {
    unTagSuggestedTask({ suggestedTaskId: suggestedTask.id, tagId });
  };

  const tags = suggestedTask.tags;

  return (
    <TagList>
      {tags.map((tag) => (
        <RemoveableTag onRemove={handleRemove} key={tag.id} tag={tag} />
      ))}
      {tags.length === 0 && <EmptyListSpan>No Tags Yet</EmptyListSpan>}
    </TagList>
  );
};

export default STaskTagList;
