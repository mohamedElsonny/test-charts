import React from 'react';
import { Layout, Col, Row } from 'antd';
import Sidebar from '../../../containers/Sidebar';
import ProjectWidget from '../../../components/Widgets/ProjectWidget';
import Productivity from '../../../components/Widgets/Productivity';

const Widgets = () => (
  <Layout className="gx-app-layout">
    <Sidebar />
    <Layout>
      <div style={{ margin: '20px' }}>
        <Row>
          <Col
            {...{
              xl: 6,
              lg: 12,
              md: 12,
              sm: 12,
              xs: 24,
            }}
          >
            <ProjectWidget />
          </Col>
          <Col
            {...{
              xl: 6,
              lg: 12,
              md: 12,
              sm: 12,
              xs: 24,
            }}
          >
            <Productivity />
          </Col>
        </Row>
      </div>
    </Layout>
  </Layout>
);

export default Widgets;
