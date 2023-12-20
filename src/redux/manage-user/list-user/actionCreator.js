import actions from './actions';
import { DataService } from '../../../config/dataService/dataService';

const { getListUserBegin, getListUserSuccess } = actions;

const getListUser = () => {
  return async (dispatch) => {
    dispatch(getListUserBegin());
    const response = await DataService.get(`/manage-user/get-list`);
    await dispatch(getListUserSuccess(response?.data?.data));
  };
};
export { getListUser };
