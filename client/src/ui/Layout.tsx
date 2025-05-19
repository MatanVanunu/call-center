import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLayout = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
`;

const Layout = () => {
  return (
    <StyledLayout>
      <Outlet />
    </StyledLayout>
  );
};

export default Layout;
