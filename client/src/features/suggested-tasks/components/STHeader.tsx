import styled from 'styled-components';
import type { SuggectedTask } from '../types/suggested-tasks';
import { FaTags, FaTrash } from 'react-icons/fa';
import { useDeleteSuggestedTask } from '../hooks/useDeleteSuggestedTask';
import TagResource from '../../tags/components/TagResource';
import { useTagSuggestedTask } from '../hooks/useTagSuggestedTask';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Content = styled.span`
  font-weight: 600;
`;

const Operations = styled.div`
  display: flex;
  gap: 1rem;
  svg {
    cursor: pointer;
  }
`;

interface InputProps {
  suggestedTask: SuggectedTask;
}

const STHeader = ({ suggestedTask }: InputProps) => {
  const { deleteSuggestedTask } = useDeleteSuggestedTask();
  const { tagSuggestedTask } = useTagSuggestedTask();

  const handleTagST = (tagId: string) => {
    tagSuggestedTask({ suggestedTaskId: suggestedTask.id, tagId });
  };

  return (
    <Header>
      <Content>{suggestedTask.name}</Content>
      <Operations>
        <FaTrash
          size={24}
          onClick={() => deleteSuggestedTask(suggestedTask.id)}
        />
        <TagResource
          applyTag={handleTagST}
          currentTagsIds={suggestedTask.tags}
          trigger={<FaTags size={24} />}
        />
      </Operations>
    </Header>
  );
};

export default STHeader;
