import actions from './actions';
import { DataService } from '../../config/dataService/dataService';
import { STATUS_CODE_SUCCESS } from '../../constants';

const { getUserBegin, getUserSuccess, getUserError } = actions;

const getUserKey = (id) => {
  return async (dispatch) => {
    const response = await DataService.getUser(`/user/${id}`);
    dispatch(getUserSuccess(response?.data?.data));
  };
};
const handleSendDataUser = (user, successCallback, errorCallback) => {
  return async (dispatch) => {
    try {
      dispatch(getUserBegin());
      const response = await DataService.post('/user', { data: user });
      if (STATUS_CODE_SUCCESS.includes(response.status)) {
        dispatch(getUserSuccess(user));
        successCallback();
      } else {
        dispatch(getUserError(response.data.errors[0]));
        errorCallback(response.data.errors[0]);
      }
    } catch (err) {
      dispatch(getUserError(err.message));
      errorCallback(err.message);
    }
  };
};
const handleDeleteUser = (typeRemove, id, successCallback, errorCallback) => {
  return async (dispatch) => {
    try {
      dispatch(getUserBegin());
      const response = !typeRemove
        ? await DataService.delete(`/user/many`, { ids: id })
        : await DataService.delete(`/user/${id}`);
      if (STATUS_CODE_SUCCESS.includes(response.status)) {
        dispatch(getUserSuccess(id));
        successCallback();
      } else {
        dispatch(getUserError(response.data.errors[0]));
        errorCallback(response.data.errors[0]);
      }
    } catch (err) {
      dispatch(getUserError(err.message));
      errorCallback(err.message);
    }
  };
};
const handleEditDataUser = (id, user, successCallback, errorCallback) => {
  return async (dispatch) => {
    try {
      dispatch(getUserBegin());
      const response = await DataService.put(`/user/${id}`, { data: user });
      if (STATUS_CODE_SUCCESS.includes(response.status)) {
        dispatch(getUserSuccess(user));
        successCallback();
      } else {
        dispatch(getUserError(response.data.errors[0]));
        errorCallback(response.data.errors[0]);
      }
    } catch (err) {
      dispatch(getUserError(err.message));
      errorCallback(err.message);
    }
  };
};
export { getUserKey, handleSendDataUser, handleDeleteUser, handleEditDataUser };
