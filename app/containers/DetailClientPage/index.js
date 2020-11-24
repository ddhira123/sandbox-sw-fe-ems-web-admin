import React, { useState, useEffect, memo } from 'react';
import { Avatar, Layout, Menu, Dropdown, message, Breadcrumb } from 'antd';
import { NavLink, Route, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faAngleDoubleLeft,
  faBell,
  faSearch,
  faChevronDown,
  faUser,
  faCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { compose } from 'redux';
import styled from 'styled-components';
import { getCookie } from '../../utils/cookie';
import reducer from './reducer';
import saga from './saga';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import DashboardIcon from '../../images/dashboard.svg';
import DashboardInactiveIcon from '../../images/dashboard_inactive.svg';
import ClientDashboard from './ClientDashboard';
import NotFoundPage from '../NotFoundPage/Loadable';

const { Header, Sider } = Layout;

const key = 'app';

const CustomLayout = styled(Layout)`
  display: flex;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 99999;
`;

const CustomHeader = styled(Header)`
  display: flex;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`;

function DetailClientPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState(
    `/${window.location.pathname.split('/')[3]}`,
  );
  const [clientId, setClientId] = useState('');

  useEffect(
    () => getCurrentPage({ key: `/${window.location.pathname.split('/')[3]}` }),
    [],
  );

  const getCurrentPage = value => {
    switch (value.key) {
      case '/':
        setClientId(window.location.pathname.split('/')[2]);
        setCurrent('dashboard');
        break;
      case '/hardware':
        setCurrent('hardware');
        break;
      case '/subscription':
        setCurrent('subscription');
        break;
      case '/feedback':
        setCurrent('feedback');
        break;
      default:
        setCurrent('-');
        break;
    }
  };

  const listMenu = [
    {
      key: 'dashboard',
      route: './',
      name: 'Dashboard',
      activeIcon: DashboardIcon,
      inactiveIcon: DashboardInactiveIcon,
    },
    {
      key: 'hardware',
      route: `./${clientId}/hardware`,
      name: 'Hardware',
      activeIcon: DashboardIcon,
      inactiveIcon: DashboardInactiveIcon,
    },
    {
      key: 'subscription',
      route: `./${clientId}/subscription`,
      name: 'Langganan',
      activeIcon: DashboardIcon,
      inactiveIcon: DashboardInactiveIcon,
    },
    {
      key: 'feedback',
      route: `./${clientId}/feedback`,
      name: 'Feedback',
      activeIcon: DashboardIcon,
      inactiveIcon: DashboardInactiveIcon,
    },
  ];

  const toggle = () => setCollapsed(!collapsed);
  const handleMenu = item => {
    switch (item.key) {
      case 'logout':
        break;
      case 'setting':
        break;
      case 'profile':
        window.location.href = '/profile';
        break;
      default:
        message.warning('please select menu!');
        break;
    }
  };
  const renderMenu = (
    <Menu
      style={{ boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.1)' }}
      onClick={handleMenu}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: 18,
          alignItems: 'center',
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
        }}
      >
        <Avatar />
        <div style={{ paddingLeft: 10 }}>
          <h4 style={{ margin: 0, fontWeight: 'bold' }}>
            {JSON.parse(getCookie('secret')).name || ''}
          </h4>
          <h4
            style={{
              margin: 0,
              fontWeight: 'normal',
              textTransform: 'capitalize',
            }}
          >
            {JSON.parse(getCookie('secret')).scope || ''}
          </h4>
        </div>
      </div>
      <Menu.Item key="profile" style={{ fontSize: 12, fontWeight: 500 }}>
        <FontAwesomeIcon icon={faUser} style={{ marginRight: 6 }} />
        Profile
      </Menu.Item>
      <Menu.Item key="setting" style={{ fontSize: 12, fontWeight: 500 }}>
        <FontAwesomeIcon icon={faCog} style={{ marginRight: 6 }} />
        Setting
      </Menu.Item>
      <Menu.Divider style={{ borderTop: '1px solid #D4D4D4' }} />
      <Menu.Item
        key="logout"
        style={{ fontSize: 12, fontWeight: 500, color: '#F04249' }}
      >
        <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: 6 }} />
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <CustomLayout className="client-details-layout">
      <Sider
        trigger={null}
        theme="light"
        collapsible
        collapsed={collapsed}
        style={{ position: 'sticky', top: 0 }}
      >
        <div>
          <a href="/">
            <div className={collapsed ? 'logo-collapsed' : 'logo'} />
          </a>
          <Menu
            theme="light"
            mode="inline"
            onSelect={value => getCurrentPage(value)}
            defaultSelectedKeys={[`/${window.location.pathname.split('/')[3]}`]}
          >
            {listMenu.map(item => (
              <Menu.Item key={item.route} title={item.name}>
                <NavLink to={item.route}>
                  <img
                    width={20}
                    height={20}
                    src={
                      current === item.key ? item.activeIcon : item.inactiveIcon
                    }
                    alt={item.name}
                  />
                  <span
                    style={{
                      marginLeft: 12,
                      display: collapsed ? 'none' : 'inline-block',
                    }}
                  >
                    {item.name}
                  </span>
                </NavLink>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </Sider>
      <CustomLayout>
        <CustomHeader className="header">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <button type="button" onClick={toggle} className="trigger">
              <FontAwesomeIcon
                style={{ fontSize: 22 }}
                icon={collapsed ? faBars : faAngleDoubleLeft}
              />
            </button>
            <div className="title">
              <Breadcrumb>
                <Breadcrumb.Item>PT. AAAA</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <button type="button" className="menu">
              <FontAwesomeIcon style={{ fontSize: 16 }} icon={faSearch} />
            </button>
            <button type="button" className="menu">
              <FontAwesomeIcon style={{ fontSize: 16 }} icon={faBell} />
            </button>
            <Dropdown overlay={renderMenu} placement="bottomRight">
              <button type="button" className="user">
                <Avatar size={28}>
                  {JSON.parse(getCookie('secret')).name.charAt(0) || '-'}
                </Avatar>
                <span id="name">
                  {JSON.parse(getCookie('secret')).name || '-'}
                </span>
                <FontAwesomeIcon
                  style={{ fontSize: 14 }}
                  icon={faChevronDown}
                />
              </button>
            </Dropdown>
          </div>
        </CustomHeader>
        <Switch>
          <Route exact path="/clients/:clientId" component={ClientDashboard} />
          <Route
            exact
            path={`/clients/${clientId}/hardware`}
            component={NotFoundPage}
          />
          <Route
            exact
            path="/clients/:clientId/subscription"
            component={NotFoundPage}
          />
          <Route
            exact
            path="/clients/:clientId/feedback"
            component={NotFoundPage}
          />
        </Switch>
      </CustomLayout>
    </CustomLayout>
  );
}

export default compose(memo)(DetailClientPage);
