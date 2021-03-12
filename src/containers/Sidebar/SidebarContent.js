import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import CustomScrollbars from 'util/CustomScrollbars';
import { useSelector } from 'react-redux';
import SidebarLogo from './SidebarLogo';
import UserProfile from './UserProfile';
import AppsNavigation from './AppsNavigation';
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE,
} from '../../util/constants/ThemeSetting';

const SidebarContent = ({ sidebarCollapsed, setSidebarCollapsed }) => {
  const { navStyle, themeType } = useSelector(({ settings }) => settings);
  const { pathname } = useSelector(({ common }) => common);

  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return 'gx-no-header-notifications';
    }
    return '';
  };
  const selectedKeys = pathname !== '/' ? pathname.substr(1) : pathname;
  const defaultOpenKeys = selectedKeys !== '/' ? selectedKeys.split('/')[1] : selectedKeys;
  console.log('defaultOpenKeys', defaultOpenKeys);
  console.log('selectedKeys', selectedKeys);
  return (
    <>
      <SidebarLogo sidebarCollapsed={sidebarCollapsed} setSidebarCollapsed={setSidebarCollapsed} />
      <div className="gx-sidebar-content">
        <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
          <UserProfile />
          <AppsNavigation />
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline"
          >
            <Menu.Item>
              <Link to="/">
                <i className="icon icon-dasbhoard" />
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/main/metrics">
                <i className="icon icon-apps" />
                <span>Metrics</span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/main/widgets">
                <i className="icon icon-widgets" />
                <span>Widgets</span>
              </Link>
            </Menu.Item>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;
