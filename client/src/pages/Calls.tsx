import styled from 'styled-components';
import CallsSibebar from '../features/calls/components/CallsSibebar';
import { Outlet } from 'react-router-dom';

const Layout = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 1rem;
  height: 100%;
  box-sizing: border-box;
  gap: 1rem;
`;

const Calls = () => {
  return (
    <Layout>
      <CallsSibebar />
      <Outlet />
    </Layout>
  );
};

export default Calls;
