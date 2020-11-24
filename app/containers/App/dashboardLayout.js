import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Layout, Menu, Dropdown, message } from 'antd';
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

import DashboardIcon from '../../images/dashboard.svg';
import DashboardInactiveIcon from '../../images/dashboard_inactive.svg';

import NotFoundPage from '../NotFoundPage/Loadable';
import DashboardPage from '../DashboardPage/Loadable';
import ProfilePage from '../ProfilePage/Loadable';
import ClientPage from '../ClientPage/Loadable';
import DetailClientPage from '../DetailClientPage/Loadable';

const { Header, Sider } = Layout;

const key = 'app';

function DashboardLayout() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState(
    `/${window.location.pathname.split('/')[1]}`,
  );

  useEffect(
    () => getCurrentPage({ key: `/${window.location.pathname.split('/')[1]}` }),
    [],
  );

  const getCurrentPage = value => {
    switch (value.key) {
      case '/':
        setCurrent('dashboard');
        break;
      case '/clients':
        setCurrent('Clients');
        break;
      default:
        setCurrent('-');
        break;
    }
  };

  const listMenu = [
    {
      key: 'dashboard',
      route: '/',
      name: 'Dashboard',
      activeIcon: DashboardIcon,
      inactiveIcon: DashboardInactiveIcon,
    },
    {
      key: 'clients',
      route: '/clients',
      name: 'Clients',
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
      default:
        message.warning('please select menu!');
        break;
    }
  };

  return (
    <Layout className="dashboard-layout">
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
            defaultSelectedKeys={[`/${window.location.pathname.split('/')[1]}`]}
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
      <Layout>
        <Header className="header">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <button type="button" onClick={toggle} className="trigger">
              <FontAwesomeIcon
                style={{ fontSize: 22 }}
                icon={collapsed ? faBars : faAngleDoubleLeft}
              />
            </button>
            <div className="title">{current.toUpperCase()}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <button type="button" className="menu">
              <FontAwesomeIcon style={{ fontSize: 16 }} icon={faSearch} />
            </button>
            <button type="button" className="menu">
              <FontAwesomeIcon style={{ fontSize: 16 }} icon={faBell} />
            </button>
          </div>
        </Header>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/clients" component={ClientPage} />
          <Route exact path="/clients/:clientId" component={DetailClientPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </Layout>
  );
}

DashboardLayout.propTypes = {
  logoutReq: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

export default DashboardLayout;
