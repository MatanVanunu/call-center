import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.nav`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  border-bottom: var(--border);
`;

const StyledLink = styled(Link)`
  all: unset;
  display: block;
  cursor: pointer;
  padding: 1rem;
  border-right: var(--border);
  transition: var(--transition);

  &:hover {
    background-color: var(--gray-primary);
  }
`;

const Navbar = () => {
  return (
    <Container>
      <StyledLink to={'/admin'}>Admin</StyledLink>
      <StyledLink to={'/calls'}>calls</StyledLink>
    </Container>
  );
};

export default Navbar;
