import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';

const StyledLayout = styled.main`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const Body = styled.div`
  height: 100%;
`;

const Layout = () => {
  return (
    <StyledLayout>
      <Navbar />
      <Body>
        <Outlet />
      </Body>
    </StyledLayout>
  );
};

export default Layout;
