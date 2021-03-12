import React from 'react';
import { Avatar, Popover } from 'antd';
import ProfilePic from 'assets/images/pic.jpg';
import { clearToken } from '../../apollo/helpers/HandleToken';

const UserProfile = () => {
  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li>My Account</li>
      <li>Connections</li>
      <li onClick={() => clearToken()}>Logout</li>
    </ul>
  );

  return (
    <div className="gx-flex-row gx-align-items-center gx-mb-4 gx-avatar-row">
      <Popover placement="bottomRight" content={userMenuOptions} trigger="click">
        <Avatar src={ProfilePic} className="gx-size-40 gx-pointer gx-mr-3" alt="" />
        <span className="gx-avatar-name">
          Meriem Ben Salem
          <i className="icon icon-chevron-down gx-fs-xxs gx-ml-2" />
        </span>
      </Popover>
    </div>
  );
};

export default UserProfile;
