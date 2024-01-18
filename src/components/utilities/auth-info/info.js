import UilAngleDown from '@iconscout/react-unicons/icons/uil-angle-down';
import UilSignout from '@iconscout/react-unicons/icons/uil-signout';
import { Avatar } from 'antd';
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { InfoWraper, NavAuth, UserDropDwon } from './auth-info-style';
import { Popover } from '../../popup/popup';
import { Dropdown } from '../../dropdown/dropdown';
import { logOut } from '../../../redux/authentication/actionCreator';
import { openNotificationWithIcon } from '../../notifications/notification';
import { setItem, getItem } from '../../../utility/localStorageControl';
import { LOCAL_STORAGE_VARIABLE, SEARCH_ON_SYSTEM } from '../../../constants/index';

const AuthInfo = React.memo(() => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    flag: getItem(LOCAL_STORAGE_VARIABLE.LANGUAGE) || 'vi',
    searchOnSystem: getItem(LOCAL_STORAGE_VARIABLE.SEARCH_ON_SYSTEM) || 'old',
  });
  const { i18n, t } = useTranslation();
  const { flag, searchOnSystem } = state;
  const history = useNavigate();

  const SignOut = useCallback(() => {
    dispatch(
      logOut(
        () => history('/login'),
        (message) => openNotificationWithIcon('error', 'Đăng xuất thất bại !', message),
      ),
    );
  }, [history, dispatch]);

  const userContent = (
    <UserDropDwon>
      <Link className="user-dropdwon__bottomAction" onClick={SignOut} to="#">
        <UilSignout /> {t('logout')}
      </Link>
    </UserDropDwon>
  );

  const onFlagChangeHandle = (value, e) => {
    e.preventDefault();
    setItem(LOCAL_STORAGE_VARIABLE.LANGUAGE, value);
    setState({
      ...state,
      flag: value,
    });
    i18n.changeLanguage(value);
  };

  const onSearchOnSystemChangeHandle = (value, e) => {
    e.preventDefault();
    setItem(LOCAL_STORAGE_VARIABLE.SEARCH_ON_SYSTEM, value);
    setState({
      ...state,
      searchOnSystem: value,
    });
    history('/list-email');
    window.location.reload(true);
  };

  const country = (
    <NavAuth>
      <Link onClick={(e) => onFlagChangeHandle('vi', e)} to="#">
        <img src={require('../../../static/img/flag/vi.png')} alt="" />
        <span>Vietnamese</span>
      </Link>
      <Link onClick={(e) => onFlagChangeHandle('en', e)} to="#">
        <img src={require('../../../static/img/flag/en.png')} alt="" />
        <span>English</span>
      </Link>
    </NavAuth>
  );

  const systems = (
    <NavAuth>
      <Link onClick={(e) => onSearchOnSystemChangeHandle(SEARCH_ON_SYSTEM.OLD, e)} to="#">
        <span>{t('searchOnOldSystem')}</span>
      </Link>
      <Link onClick={(e) => onSearchOnSystemChangeHandle(SEARCH_ON_SYSTEM.NEW, e)} to="#">
        <span>{t('searchOnNewSystem')}</span>
      </Link>
    </NavAuth>
  );

  return (
    <InfoWraper>
      <div className="ninjadash-nav-actions__item ninjadash-nav-actions__language">
        <Dropdown placement="bottomRight" content={systems} trigger="click">
          <Link to="#" className="ninjadash-nav-action-link">
            <span className="ninjadash-nav-actions__author--name">
              {searchOnSystem === SEARCH_ON_SYSTEM.NEW ? t('searchOnNewSystem') : t('searchOnOldSystem')}
            </span>
          </Link>
        </Dropdown>
      </div>
      <div className="ninjadash-nav-actions__item ninjadash-nav-actions__language">
        <Dropdown placement="bottomRight" content={country} trigger="click">
          <Link to="#" className="ninjadash-nav-action-link">
            <img src={require(`../../../static/img/flag/${flag}.png`)} alt="" height="20px" width="20px" />
          </Link>
        </Dropdown>
      </div>
      <div className="ninjadash-nav-actions__item ninjadash-nav-actions__author">
        <Popover placement="bottomRight" content={userContent} action="click">
          <Link to="#" className="ninjadash-nav-action-link">
            <Avatar src={require(`../../../static/img/avatar/profileImage1.jpeg`)} />
            <span className="ninjadash-nav-actions__author--name">
              {getItem(LOCAL_STORAGE_VARIABLE.USER_DATA).displayName}
            </span>
            <UilAngleDown />
          </Link>
        </Popover>
      </div>
    </InfoWraper>
  );
});

export default AuthInfo;
