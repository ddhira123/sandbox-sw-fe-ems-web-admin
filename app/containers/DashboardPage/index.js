import React, { memo } from 'react';
import { Layout, Row, Col, Card, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Chart from 'react-apexcharts';
import styled from 'styled-components';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { Doughnut } from '../../components/Chart';
import { Legend } from '../../components/Label';
import { WelcomeCard } from '../../components/Card';

const H4 = styled.h4`
  font-weight: bold;
  margin: 0;
`;
const { Content } = Layout;
const key = 'dashboard';

function DashboardPage() {

  const v = {
    machine: [
      { name: 'Active Device', value: 8, key: 'active' },
      { name: 'Offline Device', value: 2, key: 'offline' },
    ],
    device: [
      { name: 'Active Device', value: 1, key: 'active' },
      { name: 'Offline Device', value: 5, key: 'offline' },
    ],
  };
  const groupBar = [
    {
      name: '01:00',
      'evo-agriculture': 4000,
      'evo-fishery': 2400,
      'evo-lifestock': 2400,
      'evo-manufacture': 2400,
    },
    {
      name: '02:00',
      'evo-agriculture': 3000,
      'evo-fishery': 1398,
      'evo-lifestock': 2210,
      'evo-manufacture': 2400,
    },
    {
      name: '03:00',
      'evo-agriculture': 2000,
      'evo-fishery': 1233,
      'evo-lifestock': 2290,
      'evo-manufacture': 2400,
    },
    {
      name: '04:00',
      'evo-agriculture': 2780,
      'evo-fishery': 4000,
      'evo-lifestock': 500,
      'evo-manufacture': 2400,
    },
    {
      name: '05:00',
      'evo-agriculture': 4000,
      'evo-fishery': 2400,
      'evo-lifestock': 2400,
      'evo-manufacture': 2400,
    },
    {
      name: '06:00',
      'evo-agriculture': 3000,
      'evo-fishery': 1398,
      'evo-lifestock': 2210,
      'evo-manufacture': 2400,
    },
    {
      name: '07:00',
      'evo-agriculture': 2000,
      'evo-fishery': 1233,
      'evo-lifestock': 2290,
      'evo-manufacture': 2400,
    },
  ];
  const clientChart = {
    data: [
      {
        name: 'Evo-Manufacture',
        data: [44],
      },
      {
        name: 'Evo-Agriculture',
        data: [53],
      },
      {
        name: 'Evo-Fishery',
        data: [12],
      },
      {
        name: 'Evo-Lifestock',
        data: [9],
      },
    ],
    colors: ['#ABC5DB', '#81A7C8', '#5A8AB6', '#2D6DA4'],
  };

  const config = {
    series: clientChart.data,
    options: {
      colors: clientChart.colors,
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
        stacked: true,
        stackType: '100%',
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      tooltip: {
        x: {
          show: false,
        },
      },
      fill: {
        opacity: 1,
      },
    },
  };

  return (
    <Content style={{ backgroundColor: '#FFF' }}>
      <div className="dashboard-tab">
        <WelcomeCard />
        <Row gutter={[24, 24]} style={{ marginTop: 12 }}>
          <Col xs={24} sm={24} md={8}>
            <Card
              bodyStyle={{ padding: '20px 30px 33px 30px' }}
              style={{ borderRadius: 4, border: '1px solid #D4D4D4' }}
            >
              <Row justify="space-between" align="middle">
                <Col>
                  <h3>Machine</h3>
                </Col>
                <Col>
                  <button
                    type="button"
                    style={{ background: 'transparent', border: 'none' }}
                  >
                    <FontAwesomeIcon icon={faEllipsisH} />
                  </button>
                </Col>
              </Row>
              <Row justify="center" style={{ marginTop: 20 }}>
                <Doughnut data={v.machine} count={10} label="TOTAL MACHINE" />
              </Row>
              <div style={{ marginTop: 30 }}>
                {v.machine.map(item => (
                  <Row justify="space-between" key={item.key}>
                    <Col>
                      <Legend
                        color={item.key === 'active' ? '#55C48B' : '#D4D4D4'}
                        text={item.name}
                        style={
                          item.key === 'active' ? { marginBottom: 13 } : null
                        }
                      />
                    </Col>
                    <Col>
                      <H4>{item.value}</H4>
                    </Col>
                  </Row>
                ))}
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Card
              bodyStyle={{ padding: '20px 30px 33px 30px' }}
              style={{ borderRadius: 4, border: '1px solid #D4D4D4' }}
            >
              <Row justify="space-between" align="middle">
                <Col>
                  <h3>Device</h3>
                </Col>
                <Col>
                  <button
                    type="button"
                    style={{ background: 'transparent', border: 'none' }}
                  >
                    <FontAwesomeIcon icon={faEllipsisH} />
                  </button>
                </Col>
              </Row>
              <Row justify="center" style={{ marginTop: 20 }}>
                <Doughnut data={v.device} count={6} label="TOTAL DEVICE" />
              </Row>
              <div style={{ marginTop: 30 }}>
                {v.device.map(item => (
                  <Row justify="space-between" key={item.key}>
                    <Col>
                      <Legend
                        color={item.key === 'active' ? '#55C48B' : '#D4D4D4'}
                        text={item.name}
                        style={
                          item.key === 'active' ? { marginBottom: 13 } : null
                        }
                      />
                    </Col>
                    <Col>
                      <H4>{item.value}</H4>
                    </Col>
                  </Row>
                ))}
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Card
              bodyStyle={{ padding: '20px 30px 33px 30px' }}
              style={{ borderRadius: 4, border: '1px solid #D4D4D4' }}
            >
              <Row justify="space-between" align="middle">
                <Col>
                  <h3>Client</h3>
                </Col>
                <Col>
                  <button
                    type="button"
                    style={{ background: 'transparent', border: 'none' }}
                  >
                    <FontAwesomeIcon icon={faEllipsisH} />
                  </button>
                </Col>
              </Row>
              <div style={{ marginTop: 34 }}>
                <span
                  style={{ fontSize: 34, color: '#000000', fontWeight: 'bold' }}
                >
                  118
                </span>
                <span
                  style={{ fontSize: 14, color: '#808080', marginLeft: 10 }}
                >
                  Client
                </span>
              </div>
              <Chart
                options={config.options}
                series={config.series}
                type="bar"
                height={18}
              />
              <div style={{ marginTop: 35 }}>
                {clientChart.data.map((item, index) => (
                  <Row justify="space-between" key={item.name}>
                    <Col>
                      <Legend
                        key={item.name}
                        color={clientChart.colors[index]}
                        text={item.name}
                        style={
                          index !== clientChart.data.length - 1
                            ? { marginBottom: 13 }
                            : null
                        }
                      />
                    </Col>
                    <Col>
                      <H4>{item.data[0]}</H4>
                    </Col>
                  </Row>
                ))}
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24}>
            <Card
              bodyStyle={{ padding: '20px 30px 33px 30px' }}
              style={{ borderRadius: 4, border: '1px solid #D4D4D4' }}
            >
              <Row justify="space-between" align="middle">
                <Col>
                  <h3>Total Data</h3>
                </Col>
                <Col>
                  <button
                    type="button"
                    style={{ background: 'transparent', border: 'none' }}
                  >
                    <FontAwesomeIcon icon={faEllipsisH} />
                  </button>
                </Col>
              </Row>
              <Row style={{ marginTop: 20 }}>
                <div
                  style={{
                    width: '100%',
                    background: '#F4F4F4',
                    borderRadius: 4,
                    padding: '32px 24px',
                  }}
                >
                  <Row justify="space-between" align="middle">
                    <Col>
                      <span
                        style={{
                          color: '#000000',
                          fontWeight: 'bold',
                          fontSize: 34,
                        }}
                      >
                        77,293,852
                      </span>
                    </Col>
                    <Col>
                      <Row gutter={20}>
                        <Col>
                          <span
                            style={{
                              color: '#000000',
                              fontWeight: 'bold',
                              fontSize: 16,
                            }}
                          >
                            27,660,846
                          </span>
                          <Legend
                            spacing={8}
                            color="#ABC5DB"
                            text="Evo-Manufacture"
                          />
                        </Col>
                        <Col>
                          <span
                            style={{
                              color: '#000000',
                              fontWeight: 'bold',
                              fontSize: 16,
                            }}
                          >
                            27,660,846
                          </span>
                          <Legend
                            spacing={8}
                            color="#81A7C8"
                            text="Evo-Agriculture"
                          />
                        </Col>
                        <Col>
                          <span
                            style={{
                              color: '#000000',
                              fontWeight: 'bold',
                              fontSize: 16,
                            }}
                          >
                            27,660,846
                          </span>
                          <Legend
                            spacing={8}
                            color="#5A8AB6"
                            text="Evo-Fishery"
                          />
                        </Col>
                        <Col>
                          <span
                            style={{
                              color: '#000000',
                              fontWeight: 'bold',
                              fontSize: 16,
                            }}
                          >
                            27,660,846
                          </span>
                          <Legend
                            spacing={8}
                            color="#2D6DA4"
                            text="Evo-Lifestock"
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Row>
              <Row justify="end" gutter={8} style={{ marginTop: 10 }}>
                <Col>
                  <Button
                    style={{
                      backgroundColor: '#E5EDF4',
                      border: 'none',
                      color: '#2D6DA4',
                    }}
                  >
                    Hour
                  </Button>
                </Col>
                <Col>
                  <Button
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderRadius: 4,
                      color: '#808080',
                    }}
                  >
                    Day
                  </Button>
                </Col>
                <Col>
                  <Button
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderRadius: 4,
                      color: '#808080',
                    }}
                  >
                    Week
                  </Button>
                </Col>
                <Col>
                  <Button
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderRadius: 4,
                      color: '#808080',
                    }}
                  >
                    Month
                  </Button>
                </Col>
              </Row>
              <Row>
                <ResponsiveContainer height={272} width="100%">
                  <BarChart
                    data={groupBar}
                    margin={{
                      top: 24,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="evo-manufacture" fill="#ABC5DB" />
                    <Bar dataKey="evo-agriculture" fill="#81A7C8" />
                    <Bar dataKey="evo-fishery" fill="#5A8AB6" />
                    <Bar dataKey="evo-lifestock" fill="#2D6DA4" />
                  </BarChart>
                </ResponsiveContainer>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </Content>
  );
}

export default DashboardPage;
