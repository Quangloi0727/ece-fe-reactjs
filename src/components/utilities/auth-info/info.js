import UilAngleDown from '@iconscout/react-unicons/icons/uil-angle-down';
import UilSignout from '@iconscout/react-unicons/icons/uil-signout';
import UilUser from '@iconscout/react-unicons/icons/uil-user';
import { Avatar } from 'antd';
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { InfoWraper, NavAuth, UserDropDwon } from './auth-info-style';
import { Popover } from '../../popup/popup';
import Heading from '../../heading/heading';
import { Dropdown } from '../../dropdown/dropdown';
import { logOut } from '../../../redux/authentication/actionCreator';
import { openNotificationWithIcon } from '../../notifications/notification';
import { setItem, getItem } from '../../../utility/localStorageControl';

const AuthInfo = React.memo(() => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    flag: getItem('lang') || 'vi',
  });
  const { i18n } = useTranslation();
  const { flag } = state;
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
      <div className="user-dropdwon">
        <figure className="user-dropdwon__info">
          <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
          <figcaption>
            <Heading as="h5">Abdullah Bin Talha</Heading>
            <p>UI Expert</p>
          </figcaption>
        </figure>
        <ul className="user-dropdwon__links">
          <li>
            <Link to="#">
              <UilUser /> Profile
            </Link>
          </li>
        </ul>
        <Link className="user-dropdwon__bottomAction" onClick={SignOut} to="#">
          <UilSignout /> Đăng xuất
        </Link>
      </div>
    </UserDropDwon>
  );

  const onFlagChangeHandle = (value, e) => {
    e.preventDefault();
    setItem('lang', value);
    setState({
      ...state,
      flag: value,
    });
    i18n.changeLanguage(value);
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

  return (
    <InfoWraper>
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
            <Avatar src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png" />
            <span className="ninjadash-nav-actions__author--name">Md. Rafiq</span>
            <UilAngleDown />
          </Link>
        </Popover>
      </div>
    </InfoWraper>
  );
});

export default AuthInfo;
