import styled from 'styled-components';
import CallsSibebar from '../features/calls/components/CallsSibebar';
import { Outlet } from 'react-router-dom';

const Layout = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100%;
  box-sizing: border-box;
  gap: 1rem;
`;

const Window = styled.div`
  height: 100%;
  overflow: hidden;
`;

const Calls = () => {
  return (
    <Layout>
      <CallsSibebar />
      <Window>
        <Outlet />
      </Window>
    </Layout>
  );
};

export default Calls;
