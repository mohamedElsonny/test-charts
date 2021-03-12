import React from 'react';
import { Layout, Col, Row } from 'antd';
import {
  LineChart, ResponsiveContainer, Tooltip, Line,
} from 'recharts';

import Sidebar from '../../../containers/Sidebar';

import {
  EcommerceStatus,
  GrowthCard,
  QueriesCard,
  TrafficRaiseCard,
  TotalEncomeCard,
  IconWithTextCard,
  ChartCard,
  GrothChartWidget,
} from '../../../components/Metrics';
import Widget from '../../../components/Widget';

const data = [
  { name: 'Page A', price: 200 },
  { name: 'Page B', price: 1200 },
  { name: 'Page C', price: 600 },
  { name: 'Page D', price: 1600 },
  { name: 'Page D', price: 1000 },
  { name: 'Page H', price: 2260 },
  { name: 'Page K', price: 800 },
];
const MetricsPage = () => (
  <Layout className="gx-app-layout">
    <Sidebar />
    <Layout>
      <div style={{ margin: '20px' }}>
        <Row>
          <Col lg={12} md={12} sm={12} xl={6} xs={24}>
            <IconWithTextCard icon="orders" title="2,380" iconColor="geekblue" subTitle="Orders this year" />
          </Col>
          <Col lg={12} md={12} sm={12} xl={6} xs={24}>
            <IconWithTextCard icon="revenue-new" title="2,380" iconColor="primary" subTitle="Orders this year" />
          </Col>
          <Col lg={12} md={12} sm={12} xl={6} xs={24}>
            <IconWithTextCard icon="visits" title="2,380" iconColor="geekblue" subTitle="Visits this year" />
          </Col>
          <Col lg={12} md={12} sm={12} xl={6} xs={24}>
            <IconWithTextCard icon="queries" title="2,380" iconColor="geekblue" subTitle="Queries this year" />
          </Col>
          <Col lg={12} md={12} sm={12} xl={6} xs={24}>
            <GrowthCard
              {...{
                bgColor: 'white',
                title: '92',
                styleName: 'up',
                desc: 'Growth in revenue',
              }}
            >
              <GrothChartWidget
                colorID="color_id_1"
                data={data}
                dataKey="price"
                startColor="#163469"
                endColor="#FE9E15"
              />
            </GrowthCard>
          </Col>
          <Col lg={12} md={12} sm={12} xl={6} xs={24}>
            <GrowthCard
              {...{
                bgColor: 'white',
                title: '38',
                styleName: 'up',
                desc: 'Growth in revenue',
              }}
            >
              <GrothChartWidget
                data={[
                  { name: 'Page A', revenue: 200 },
                  { name: 'Page B', revenue: 1200 },
                  { name: 'Page C', revenue: 600 },
                  { name: 'Page D', revenue: 1600 },
                  { name: 'Page D', revenue: 1000 },
                  { name: 'Page H', revenue: 2260 },
                  { name: 'Page K', revenue: 800 },
                ]}
                dataKey="revenue"
                type="monotone"
                colorID="color_id_2"
                strokeColor="#4D95F3"
                startColor="#4ECDE4"
                endColor="#06BB8A"
              />
            </GrowthCard>
          </Col>
          <Col lg={12} md={12} sm={12} xl={6} xs={24}>
            <GrowthCard
              {...{
                bgColor: 'white',
                title: '38',
                styleName: 'down',
                desc: 'Less orders from past year',
              }}
            >
              <GrothChartWidget
                data={[
                  { name: 'Page A', price: 200 },
                  { name: 'Page B', price: 1200 },
                  { name: 'Page C', price: 600 },
                  { name: 'Page D', price: 1600 },
                  { name: 'Page D', price: 1000 },
                  { name: 'Page H', price: 2260 },
                  { name: 'Page K', price: 800 },
                ]}
                dataKey="price"
                colorID="color_id_3"
                strokeColor="#FEEADA"
                startColor="#e81a24"
                endColor="#FEEADA"
              />
            </GrowthCard>
          </Col>
          <Col lg={12} md={12} sm={12} xl={6} xs={24}>
            <GrowthCard
              {...{
                bgColor: 'white',
                title: '44',
                styleName: 'up',
                desc: 'Traffic raise',
              }}
            >
              <ResponsiveContainer width="100%" height={100}>
                <LineChart
                  data={[
                    { name: 'Page A', traffic: 200 },
                    { name: 'Page B', traffic: 1100 },
                    { name: 'Page C', traffic: 800 },
                    { name: 'Page D', traffic: 1700 },
                    { name: 'Page D', traffic: 600 },
                    { name: 'Page D', traffic: 1800 },
                    { name: 'Page D', traffic: 600 },
                  ]}
                  margin={{
                    top: 5,
                    right: 5,
                    left: 5,
                    bottom: 5,
                  }}
                >
                  <Tooltip />
                  <Line
                    dataKey="traffic"
                    stroke="#038FDE"
                    dot={{ stroke: '#FEA931', strokeWidth: 2 }}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </GrowthCard>
          </Col>
          <Col lg={8} md={8} sm={12} xl={4} xs={24}>
            <EcommerceStatus
              color="orange"
              colorSubTitle="geekblue"
              colorTitle="geekblue"
              icon="orders"
              subTitle="Orders this year"
              title="2,380"
            />
          </Col>
          <Col lg={8} md={8} sm={12} xl={4} xs={24}>
            <EcommerceStatus
              color="geekblue"
              colorSubTitle="grey"
              colorTitle="primary"
              icon="revenue-new"
              subTitle="Revenue this year"
              title="$9,623"
            />
          </Col>
          <Col lg={8} md={8} sm={12} xl={4} xs={24}>
            <EcommerceStatus
              colorTitle="primary"
              colorSubTitle="geekblue"
              icon="visits"
              subTitle="Web visits this year"
              title="32,567"
            />
          </Col>

          <Col lg={12} md={12} sm={12} xl={6} xs={24}>
            <TotalEncomeCard />
          </Col>
          <Col lg={12} md={12} sm={12} xl={6} xs={24}>
            <TrafficRaiseCard />
          </Col>
          <Col lg={12} md={12} sm={12} xl={6} xs={24}>
            <QueriesCard />
          </Col>
        </Row>
      </div>
    </Layout>
  </Layout>
);

export default MetricsPage;
