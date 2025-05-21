import styled from 'styled-components';
import { useCall } from '../hooks/useCall';
import TagResource from '../../tags/components/TagResource';
import { useTagCall } from '../hooks/useTagCall';
import { useUnTagCall } from '../hooks/useUnTagCall';
import RemoveableTag from '../../tags/components/RemoveableTag';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 30%;
  gap: 1rem;
  border: var(--border);
  border-radius: 0.5rem;
  padding: 0.5rem;
  align-items: center;
`;

const CallTagList = () => {
  const { call } = useCall();
  const { tagCall } = useTagCall();
  const { unTagCall } = useUnTagCall();

  if (!call) return null;

  const handleTag = (tagId: string) => {
    tagCall({ callId: call.id, tagId });
  };

  const handleRemoveTag = (tagId: string) => {
    unTagCall({ callId: call.id, tagId });
  };

  return (
    <Container>
      <span>Tags</span>
      {call.tags?.map((tag) => (
        <RemoveableTag key={tag.id} tag={tag} onRemove={handleRemoveTag} />
      ))}
      <TagResource applyTag={handleTag} currentTagsIds={call.tags} />
    </Container>
  );
};

export default CallTagList;
