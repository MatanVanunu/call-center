import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../ui/Button';

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  all: unset;
`;

const Home = () => {
  return (
    <Container>
      <Links>
        <StyledLink to={'/admin'}>
          <Button>Admin</Button>
        </StyledLink>
        <StyledLink to={'/calls'}>
          <Button>User</Button>
        </StyledLink>
      </Links>
    </Container>
  );
};

export default Home;
