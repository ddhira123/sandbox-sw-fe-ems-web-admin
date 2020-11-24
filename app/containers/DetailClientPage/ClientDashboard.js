import React, { memo } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Row, Col, Tabs, Layout, Card } from 'antd';
import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { StatsDoughnut } from '../../components/Chart';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './reducer';
import { useInjectSaga } from '../../utils/injectSaga';
import saga from './saga';
import { indicatorRequest, sectorRequest } from './actions';
import {
  makeSelectIndicator,
  makeSelectIndicatorIsLoading,
  makeSelectSector,
} from './selectors';
import clientData from '../ClientPage/ClientData';

const { TabPane } = Tabs;
const { Content } = Layout;

const CustomTabs = styled(Tabs)`
  .ant-tabs-nav-wrap {
    border-bottom: 1px solid #d4d4d4 !important;
  }
  .ant-tabs-tab {
    margin: 0 !important;
    padding: 12px 20px !important;
  }
`;

const key = 'sector';
// const regInputName = /[.,+#!@$%&*(^)/<>:";'[{}_=\-\\?|`~\s]/g;

function ClientDashboard() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  // const onChangeTextCustom = e => {
  //   // const inputName = e.target.name;
  //   // const customizeInputName = inputName
  //   //   .toLowerCase()
  //   //   .replace(regInputName, '');
  // };

  const getEnterpriseById = id => {
    let ent = {};
    clientData.forEach(item => {
      if (item.clientId === id) ent = item;
    });
    return ent;
  };

  const client = getEnterpriseById(window.location.pathname.split('/')[2]);

  const clientInfo = {
    device: [
      { name: 'Active Device', value: 2, key: 'active' },
      { name: 'Offline Device', value: 3, key: 'offline' },
    ],
    deviceCap: [
      { name: 'Active Device', value: 5, key: 'active' },
      { name: 'Offline Device', value: 45, key: 'offline' },
    ],
    indicator: [
      { name: 'Active Device', value: 2, key: 'active' },
      { name: 'Offline Device', value: 20, key: 'offline' },
    ],
    sector: [
      { name: 'Active Device', value: 1, key: 'active' },
      { name: 'Offline Device', value: 9, key: 'offline' },
    ],
    data: [
      { name: 'Active Device', value: 500, key: 'active' },
      { name: 'Offline Device', value: 2000, key: 'offline' },
    ],
  };

  return (
    <>
      <Content style={{ backgroundColor: '#FFFFFF', padding: '24px 40px' }}>
        <CustomTabs defaultActiveKey="1">
          <TabPane tab="OVERVIEW" key="1">
            <div
              style={{
                margin: '24px 0px',
                padding: 16,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                backgroundColor: '#F4F4F4',
              }}
            >
              <Row style={{ width: '100%' }}>
                <Col sm={24} md={15}>
                  <Row justify="space-between">
                    <Col span={21}>
                      <Row>
                        <Col md={5}>
                          <div
                            style={{
                              width: '5vw',
                              height: '5vw',
                              minWidth: 35,
                              minHeight: 35,
                              borderRadius: '50%',
                              backgroundColor: '#fff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <img
                              style={{
                                width: '4.5vw',
                                height: '4.5vw',
                                minWidth: 30,
                                minHeight: 30,
                                margin: 'auto',
                                display: 'block',
                              }}
                              src={client.clientLogo}
                              alt="Client Logo"
                            />
                          </div>
                        </Col>
                        <Col md={19}>
                          <h3>{client.clientName.toUpperCase()}</h3>
                          <Row>
                            <Col>
                              <FaMapMarkerAlt color="#ED1C24" />
                            </Col>
                            <Col>
                              <div style={{ width: 10 }} />
                            </Col>
                            <Col>{client.clientAddress}</Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={3}>Edit</Col>
                  </Row>
                  <Row style={{ marginTop: 20 }}>
                    <Col>
                      <Row>Person in Charge (PIC)</Row>
                      <Row>Phone Number</Row>
                    </Col>
                    <Col>
                      <div style={{ width: 16 }} />
                    </Col>
                    <Col>
                      <Row>:</Row>
                      <Row>:</Row>
                    </Col>
                    <Col>
                      <div style={{ width: 16 }} />
                    </Col>
                    <Col>
                      <Row>Agus</Row>
                      <Row>081281319199</Row>
                    </Col>
                  </Row>
                </Col>
                <Col sm={24} md={9}>
                  <Card
                    style={{
                      backgroundColor: '#F4F4F4',
                      border: '1px solid #D4D4D4',
                      boxSizing: 'border-box',
                      borderRadius: '4px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 'bold',
                        fontSize: '16px',
                        lineHeight: '19px',
                      }}
                    >
                      Subscription
                    </span>
                    <Row>
                      <Col>
                        <Row>{client.subscriptionType}</Row>
                        <Row>Plan</Row>
                        <Row>Status</Row>
                        <Row>Start Subscription</Row>
                        <Row>Active Until</Row>
                      </Col>
                      <Col>
                        <div style={{ width: 10 }} />
                      </Col>
                      <Col>
                        <Row>:</Row>
                        <Row>:</Row>
                        <Row>:</Row>
                        <Row>:</Row>
                        <Row>:</Row>
                      </Col>
                      <Col>
                        <div style={{ width: 10 }} />
                      </Col>
                      <Col>
                        <Row>evo-agriculture</Row>
                        <Row>Custom</Row>
                        <Row>Active</Row>
                        <Row>10 November 2019</Row>
                        <Row>10 November 2021</Row>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </div>
            <Row
              justify="space-between"
              style={{ marginTop: 20, width: '80%' }}
            >
              <Col style={{ alignItems: 'center' }}>
                <Row>
                  <StatsDoughnut
                    data={clientInfo.device}
                    count={clientInfo.device[0].value.toString()}
                    label={`of ${(
                      clientInfo.device[0].value + clientInfo.device[1].value
                    ).toString()} Devices`}
                  />
                </Row>
                <span
                  style={{
                    display: 'block',
                    margin: 'auto',
                    textAlign: 'center',
                    marginTop: '20px',
                  }}
                >
                  ACTIVE DEVICE
                </span>
              </Col>
              <Col style={{ alignItems: 'center' }}>
                <Row>
                  <StatsDoughnut
                    data={clientInfo.deviceCap}
                    count={clientInfo.deviceCap[0].value.toString()}
                    label={`of ${(
                      clientInfo.deviceCap[0].value +
                      clientInfo.deviceCap[1].value
                    ).toString()} Devices`}
                  />
                </Row>
                <span
                  style={{
                    display: 'block',
                    margin: 'auto',
                    textAlign: 'center',
                    marginTop: '20px',
                  }}
                >
                  TOTAL DEVICE
                </span>
              </Col>
              <Col style={{ alignItems: 'center' }}>
                <Row>
                  <StatsDoughnut
                    data={clientInfo.sector}
                    count={clientInfo.sector[0].value.toString()}
                    label={`of ${(
                      clientInfo.sector[0].value + clientInfo.sector[1].value
                    ).toString()} Sectors`}
                  />
                </Row>
                <span
                  style={{
                    display: 'block',
                    margin: 'auto',
                    textAlign: 'center',
                    marginTop: '20px',
                  }}
                >
                  TOTAL SECTOR
                </span>
              </Col>
              <Col style={{ alignItems: 'center' }}>
                <Row>
                  <StatsDoughnut
                    data={clientInfo.indicator}
                    count={clientInfo.indicator[0].value.toString()}
                    label={`of ${(
                      clientInfo.indicator[0].value +
                      clientInfo.indicator[1].value
                    ).toString()} Indicators`}
                  />
                </Row>
                <span
                  style={{
                    display: 'block',
                    margin: 'auto',
                    textAlign: 'center',
                    marginTop: '20px',
                  }}
                >
                  TOTAL INDICATOR
                </span>
              </Col>
              <Col style={{ alignItems: 'center' }}>
                <Row>
                  <StatsDoughnut
                    data={clientInfo.data}
                    count={clientInfo.data[0].value.toString()}
                    label={`of ${(
                      clientInfo.data[0].value + clientInfo.data[1].value
                    ).toString()} Data`}
                  />
                </Row>
                <span
                  style={{
                    display: 'block',
                    margin: 'auto',
                    textAlign: 'center',
                    marginTop: '20px',
                  }}
                >
                  TOTAL DATA
                </span>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="SUBSCRIPTION" key="2">
            <Card>
              <Row>
                <Col sm={24} md={8}>
                  <Row>
                    <span style={{ color: '#808080' }}>
                      00000000000 - 10 November 2019 - 10:00:00
                    </span>
                  </Row>
                  <Row>
                    <span
                      style={{
                        color: '#00A651',
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginTop: 26,
                        marginBottom: 26,
                      }}
                    >
                      PAYMENT SUCCESS
                    </span>
                  </Row>
                  <Row>
                    <span
                      style={{
                        color: '#000',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}
                    >
                      AGUS NUGROHO - BCA 119000000
                    </span>
                  </Row>
                  <Row>
                    <span
                      style={{
                        color: '#2D6DA4',
                        marginTop: 16,
                      }}
                    >
                      View Receipt
                    </span>
                  </Row>
                </Col>
                <Col sm={24} md={16}>
                  <div
                    style={{
                      padding: 16,
                      display: 'flex',
                      alignItems: 'flex-start',
                      backgroundColor: '#F4F4F4',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Row style={{ width: '100%' }}>
                      <Col span={10}>
                        <Row style={{ fontWeight: 'bold', marginBottom: 30 }}>
                          Purchase Item
                        </Row>
                        <Row>EMS V1</Row>
                      </Col>
                      <Col span={3}>
                        <Row style={{ fontWeight: 'bold', marginBottom: 30 }}>
                          Plan
                        </Row>
                        <Row>Custom</Row>
                      </Col>
                      <Col span={3}>
                        <Row style={{ fontWeight: 'bold', marginBottom: 30 }}>
                          Period
                        </Row>
                        <Row>Yearly</Row>
                      </Col>
                      <Col span={3}>
                        <Row style={{ fontWeight: 'bold', marginBottom: 30 }}>
                          Value
                        </Row>
                        <Row>2</Row>
                      </Col>
                      <Col span={5}>
                        <Row style={{ fontWeight: 'bold', marginBottom: 30 }}>
                          Subtotal
                        </Row>
                        <Row>Rp. 20.000.000,00</Row>
                      </Col>
                    </Row>
                  </div>
                  <div
                    className="ant-divider"
                    style={{ backgroundColor: '#000' }}
                  />
                  <div
                    style={{
                      padding: 16,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      backgroundColor: '#F4F4F4',
                    }}
                  >
                    <Row style={{ width: '100%' }}>
                      <Col span={19}>
                        <Row style={{ fontWeight: 'bold' }}>Total</Row>
                      </Col>
                      <Col span={5}>
                        <Row>Rp. 20.000.000,00</Row>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Card>
          </TabPane>
          <TabPane tab="ISSUE" key="3" />
          <TabPane tab="USER" key="4" />
          <TabPane tab="SECTOR" key="5" />
        </CustomTabs>
      </Content>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  indicator: makeSelectIndicator(),
  indicatorIsLoading: makeSelectIndicatorIsLoading(),
  sector: makeSelectSector(),
});

export function mapDispatchToProps(dispatch) {
  return {
    indicatorReq: () => dispatch(indicatorRequest()),
    sectorReq: () => dispatch(sectorRequest()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ClientDashboard);
