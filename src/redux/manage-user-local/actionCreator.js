import actions from './actions';
import { DataService } from '../../config/dataService/dataService';
import dataUserColumn from '../../config/manage-user/config-header-manage-user.json';

const { getListUserBegin, getListUserSuccess } = actions;

const getListUser = (page, pageSize, search) => {
  return async (dispatch) => {
    dispatch(getListUserBegin());
    const response = await DataService.get(`/manage-user-local?page=${page}&pageSize=${pageSize}&search=${search}`);
    await dispatch(
      getListUserSuccess(
        response?.data?.data ? response?.data?.data[0] : [],
        response?.data?.data ? response?.data?.data[1] : 0,
        dataUserColumn,
      ),
    );
  };
};
export { getListUser };
