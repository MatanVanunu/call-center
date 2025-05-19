import styled from 'styled-components';
import CreateTagForm from '../features/tags/components/CreateTagForm';
import TagList from '../features/tags/components/TagList';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const Column = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
      </Column>
    </Layout>
  );
};

export default Admin;
