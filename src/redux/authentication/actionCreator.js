import actions from './actions';
import actionsCustomizeTable from '../manage-mail/customize-table/actions';
import { DataService } from '../../config/dataService/dataService';
import { setItem, removeItem } from '../../utility/localStorageControl';
import { LOCAL_STORAGE_VARIABLE } from '../../constants';

const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr } = actions;
const { customizeTableSuccess } = actionsCustomizeTable;
const login = (values, successCallback, errorCallback) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      const response = await DataService.post('/login', values);
      if (response.data.code === 200 && response.data.data) {
        const { token, refreshToken, displayName, configColumn } = response.data.data;
        if (configColumn) {
          setItem(LOCAL_STORAGE_VARIABLE.CUSTOMIZE_TABLE, JSON.parse(configColumn));
          dispatch(customizeTableSuccess(JSON.parse(configColumn)));
        }
        setItem(LOCAL_STORAGE_VARIABLE.USER_DATA, { token, refreshToken, displayName, isLogin: true });
        dispatch(loginSuccess(true));
        successCallback();
      } else {
        dispatch(loginErr(response.data.errors));
        errorCallback();
      }
    } catch (err) {
      dispatch(loginErr(err));
      errorCallback();
    }
  };
};

const register = (values) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      const response = await DataService.post('/register', values);
      if (response.data.errors) {
        dispatch(loginErr('Registration failed!'));
      } else {
        dispatch(loginSuccess(false));
      }
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const logOut = (successCallback, errorCallback) => {
  return async (dispatch) => {
    dispatch(logoutBegin());
    try {
      const response = await DataService.post('/logout');
      if (response.data.errors) {
        dispatch(logoutErr(response.data.errors));
        errorCallback(response.data.errors);
      } else {
        removeItem(LOCAL_STORAGE_VARIABLE.USER_DATA);
        dispatch(logoutSuccess(false));
        successCallback();
      }
    } catch (err) {
      dispatch(loginErr(err));
      errorCallback(); // Trigger error callback for notification
    }
  };
};

export { login, logOut, register };
