import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FaPlus, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Row,
  Col,
  Select,
  Layout,
  Button,
} from 'antd';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './reducer';
import { useInjectSaga } from '../../utils/injectSaga';
import saga from './saga';
import { clientsRequest, clientRequest } from './actions';
import {
  makeSelectClients,
  makeSelectClientsIsLoading,
  makeSelectClient,
} from './selectors';
import { ClientCard, IssueCard } from '../../components/Card';
import clientData from './ClientData';

const { Content } = Layout;

const key = 'client';

function ClientPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [valueFilter, setValueFilter] = useState('all');
  const [valueSort, setValueSort] = useState('alphabet');
  const [clientsData, setClientsData] = useState(clientData);

  const ButtonAddEnterprise = styled(Button)`
    background-color: #159957;
    color: white;
    font-family: Roboto, sans-serif;
    border-radius: 4px;
    border-color: unset;
    display: flex;
    align-items: center;

    &:hover,
    &:active,
    &:focus {
      border-color: #159957;
      color: #159957;
    }
  `;

  // Select component contents for Filter
  const filterOptions = [
    { key: 'all', value: 'Semua' },
    { key: 'evo-manufacture', value: 'Evo-Manufacture' },
    { key: 'evo-agriculture', value: 'Evo-Agriculture' },
    { key: 'evo-livestock', value: 'Evo-Lifestock' },
    { key: 'evo-fishery', value: 'Evo-Fishery' },
  ];

  // Select component contents for Sort
  const sortOptions = [
    { key: 'alphabet', value: 'Alphabetical' },
    { key: 'date-created', value: 'Date Created' },
  ];

  // Sort Clients
  const sortData = param => {
    if (param === 'alphabet') {
      clientsData.sort((a, b) => {
        if (a.clientName > b.clientName) {
          return 1;
        }
        return b.clientName > a.clientName ? -1 : 0;
      });
    }
    if (param === 'date-created') {
      clientsData.sort((a, b) => {
        const x = new Date(a.dateCreated);
        const y = new Date(b.dateCreated);
        if (x > y) {
          return 1;
        }
        return y > x ? -1 : 0;
      });
    }
  };

  // Filter Clients based on Subscription Type
  const filterClients = param => {
    if (param !== 'all') {
      setClientsData(
        clientData.filter(item => item.subscriptionType === param),
      );
    } else {
      setClientsData(clientData);
    }
  };

  return (
    <>
      <Content style={{ backgroundColor: '#FFFFFF' }}>
        <Row style={{ height: '100%' }}>
          <Col sm={24} md={18} style={{ padding: '16px 28px', margin: 0 }}>
            <Row
              style={{ marginTop: 10, marginBottom: 20, fontSize: 12 }}
              justify="space-between"
              align="middle"
              id="sort-and-filter"
            >
              <Col>
                <Select
                  defaultValue="all"
                  style={{ width: 136 }}
                  onSelect={value => {
                    setValueFilter(value);
                    filterClients(value);
                  }}
                  value={valueFilter}
                  optionLabelProp="label"
                >
                  {filterOptions.map(item => (
                    <Select.Option value={item.key} label={item.value}>
                      {valueFilter === item.key ? (
                        <Row>
                          <Col>
                            <FaCheck size="12px" style={{ marginRight: 8 }} />
                          </Col>
                          <Col>{item.value}</Col>
                        </Row>
                      ) : (
                        <Row>
                          <Col />
                          <Col>{item.value}</Col>
                        </Row>
                      )}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col>
                <Row gutter={10} align="middle" justify="center">
                  <Col
                    style={{ fontWeight: 400, color: '#000', fontSize: 14 }}
                  >{`${clientsData.length} Client`}</Col>
                  <Col>
                    <ButtonAddEnterprise>
                      <FaPlus size="12px" style={{ marginRight: 8 }} />
                      Add New Client
                    </ButtonAddEnterprise>
                  </Col>
                  <Col>
                    <Select
                      defaultValue="all"
                      style={{ width: 136 }}
                      onChange={value => {
                        setValueSort(value);
                        sortData(value);
                      }}
                      value={valueSort}
                      optionLabelProp="label"
                    >
                      {sortOptions.map(item => (
                        <Select.Option value={item.key} label={item.value}>
                          {valueSort === item.key ? (
                            <Row>
                              <Col>
                                <FaCheck
                                  size="12px"
                                  style={{ marginRight: 8 }}
                                />
                              </Col>
                              <Col>{item.value}</Col>
                            </Row>
                          ) : (
                            <Row>
                              <Col />
                              <Col>{item.value}</Col>
                            </Row>
                          )}
                        </Select.Option>
                      ))}
                    </Select>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              {clientsData &&
                clientsData.map(item => (
                  <Col key={item.clientId}>
                    <Link
                      to={{
                        pathname: `/clients/${item.clientId}`,
                      }}
                    >
                      <ClientCard
                        clientName={item.clientName}
                        clientLogo={item.clientLogo}
                      />
                    </Link>
                  </Col>
                ))}
            </Row>
          </Col>
          <Col
            sm={24}
            md={6}
            style={{
              backgroundColor: '#E5EDF4',
              padding: '16px',
              margin: 0,
              fontFamily: 'roboto',
            }}
          >
            <Row>
              <span style={{ fontWeight: '700', fontSize: 20 }}>Feedback</span>
            </Row>
            <Row style={{ padding: '16px 0px' }}>
              <IssueCard
                issueName="Mesin Mati"
                issuedTime="10m"
                clientName="Coba"
                clientLogo="https://icon-library.com/images/square-icon-png/square-icon-png-17.jpg"
              />
            </Row>
          </Col>
        </Row>
      </Content>
    </>
  );
}

export default ClientPage;
