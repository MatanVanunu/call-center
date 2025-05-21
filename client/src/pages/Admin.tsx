import styled from 'styled-components';
import CreateTagForm from '../features/tags/components/CreateTagForm';
import TagList from '../features/tags/components/TagList';
import SuggestTaskForm from '../features/suggested-tasks/components/SuggestTaskForm';
import SuggestedTaskList from '../features/suggested-tasks/components/SuggestedTaskList';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  height: 100%;
`;

const Column = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
`;

const Header = styled.span`
  font-size: 2rem;
`;

const Admin = () => {
  return (
    <Layout>
      <Column>
        <Header>Tags</Header>
        <CreateTagForm />
        <TagList />
      </Column>

      <Column>
        <Header>Suggested Tasks</Header>
        <SuggestTaskForm />
        <SuggestedTaskList />
      </Column>
    </Layout>
  );
};

export default Admin;
