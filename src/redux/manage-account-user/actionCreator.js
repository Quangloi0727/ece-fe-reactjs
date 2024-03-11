import actions from './actions';
import { DataService } from '../../config/dataService/dataService';
import dataUserColumn from '../../config/manage-user/configColumnUser.json';

const { getListUserBegin, getListUserSuccess } = actions;

const getListUser = (page, pageSize, searchMulti) => {
  return async (dispatch) => {
    dispatch(getListUserBegin());
    const dataUser = await DataService.getUser(`/user?page=${page}&pageSize=${pageSize}&searchMulti=${searchMulti}`);
    await dispatch(getListUserSuccess(dataUser?.data?.data[0], dataUser?.data?.data[1], dataUserColumn));
  };
};
export { getListUser };
