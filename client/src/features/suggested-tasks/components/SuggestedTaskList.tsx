import ListContainer from '../../../ui/ListContainer';
import { useSuggestedTasks } from '../hooks/useSuggestedTasks';
import SuggestedTaskListItem from './SuggestedTaskListItem';

const SuggestedTaskList = () => {
  const { suggestedTasks } = useSuggestedTasks();

  return (
    <ListContainer>
      {suggestedTasks?.map((st) => (
        <SuggestedTaskListItem key={st.id} suggestedTask={st} />
      ))}
    </ListContainer>
  );
};

export default SuggestedTaskList;
