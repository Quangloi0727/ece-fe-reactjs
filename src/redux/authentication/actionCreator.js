import actions from './actions';
import { DataService } from '../../config/dataService/dataService';
import { setItem, removeItem } from '../../utility/localStorageControl';

const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr } = actions;
const login = (values, successCallback, errorCallback) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      const response = await DataService.post('/login', values);
      if (response.data.code === 200 && response.data.data) {
        const { token, refreshToken } = response.data.data;
        setItem('userData', { token, refreshToken, isLogin: true });
        dispatch(loginSuccess(true));
        successCallback(); // Execute success callback for redirection
      } else {
        dispatch(loginErr(response.data.errors));
        errorCallback(); // Trigger error callback for notification
      }
    } catch (err) {
      dispatch(loginErr(err));
      errorCallback(); // Trigger error callback for notification
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
      console.log(33333, response);
      if (response.data.errors) {
        dispatch(logoutErr(response.data.errors));
        errorCallback(response.data.errors);
      } else {
        removeItem('userData');
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
