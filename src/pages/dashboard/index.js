import React from 'react';
import { Layout } from 'antd';
import CubeCanvas from './Canvas';
import Sidebar from '../../containers/Sidebar';
import Topbar from '../../containers/Topbar';

const Dashboard = () => (
  <Layout className="gx-app-layout">
    <Sidebar />
    <Layout>
      {/* <Topbar /> */}
      <CubeCanvas />
    </Layout>
  </Layout>
);

export default Dashboard;
