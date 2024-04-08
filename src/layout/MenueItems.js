import React from 'react';
import { Menu, Tooltip } from 'antd';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import propTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { useTranslation } from 'react-i18next';
import { getItem } from '../utility/localStorageControl';
import {
  PREFIX_FORM_MANAGE_USER,
  TITLE_FORM_MANAGE_USER,
  TITLE_LOOK_UP_EMAIL,
  USER,
  LOCAL_STORAGE_VARIABLE,
} from '../constants';

function MenuItems({ toggleCollapsed }) {
  function getItemMenu(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const { topMenu } = useSelector((state) => {
    return {
      topMenu: state.ChangeLayoutMode.topMenu,
    };
  });

  const path = '';
  const { t } = useTranslation();
  const pathName = window.location.pathname;
  const pathArray = pathName && pathName !== '/' ? pathName.split(path) : [];
  const mainPath = pathArray.length > 1 ? pathArray[1] : '';
  const mainPathSplit = mainPath.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = (keys) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = (item) => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };
  const items = [];
  if (getItem(LOCAL_STORAGE_VARIABLE.USER_DATA).role === USER.KEY_ROLE_ALL) {
    items.push(
      getItemMenu(
        <Tooltip title={t(`${TITLE_LOOK_UP_EMAIL}`)} placement="topLeft">
          <NavLink onClick={toggleCollapsed} to={`${path}/list-email`}>
            <FontAwesome
              className="text-[18px] ltr:mr-[10px] rtl:ml-[10px] text-body dark:text-white60"
              name="envelope"
              size="2x"
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </NavLink>
        </Tooltip>,
        'starter',
      ),
      getItemMenu(
        <Tooltip title={t(`${PREFIX_FORM_MANAGE_USER}${TITLE_FORM_MANAGE_USER.MANAGEUSER}`)} placement="topLeft">
          <NavLink onClick={toggleCollapsed} to={`${path}/manage-user-local`}>
            <FontAwesome
              className="text-[18px] ltr:mr-[10px] rtl:ml-[10px] text-body dark:text-white60"
              name="user"
              size="2x"
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </NavLink>
        </Tooltip>,
        'manage-user-local',
      ),
    );
  }
  if (getItem(LOCAL_STORAGE_VARIABLE.USER_DATA).role === USER.KEY_ROLE_USER) {
    items.push(
      getItemMenu(
        <Tooltip title={t(`${TITLE_LOOK_UP_EMAIL}`)} placement="topLeft">
          <NavLink onClick={toggleCollapsed} to={`${path}/list-email`}>
            <FontAwesome
              className="text-[18px] ltr:mr-[10px] rtl:ml-[10px] text-body dark:text-white60"
              name="envelope"
              size="2x"
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </NavLink>
        </Tooltip>,
        'starter',
      ),
    );
  }
  if (getItem(LOCAL_STORAGE_VARIABLE.USER_DATA).role === USER.KEY_ROLE_ADMIN) {
    items.push(
      getItemMenu(
        <Tooltip title={t(`${PREFIX_FORM_MANAGE_USER}${TITLE_FORM_MANAGE_USER.MANAGEUSER}`)} placement="topLeft">
          <NavLink onClick={toggleCollapsed} to={`${path}/manage-user-local`}>
            <FontAwesome
              className="text-[18px] ltr:mr-[10px] rtl:ml-[10px] text-body dark:text-white60"
              name="user"
              size="2x"
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </NavLink>
        </Tooltip>,
        'manage-user-local',
      ),
    );
  }
  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<UilEllipsisV />}
      openKeys={openKeys}
      items={items}
    />
  );
}

MenuItems.propTypes = {
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
