import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import { useIsFetching } from '@tanstack/react-query';
import Spinner from './Spinner';

const StyledLayout = styled.main`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const Body = styled.div`
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(1px);
  z-index: 2000;
`;

const Layout = () => {
  const isFetching = useIsFetching();
  return (
    <StyledLayout>
      <Navbar />
      <Body>
        {!!isFetching && (
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        )}
        <Outlet />
      </Body>
    </StyledLayout>
  );
};

export default Layout;
