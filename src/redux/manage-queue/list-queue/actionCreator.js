import actions from './actions';
import { DataService } from '../../../config/dataService/dataService';

const { getListQueueBegin, getListQueueSuccess } = actions;

const getListQueue = () => {
  return async (dispatch) => {
    dispatch(getListQueueBegin());
    const response = await DataService.get(`/manage-queue/get-list`);
    await dispatch(getListQueueSuccess(response?.data?.data));
  };
};
export { getListQueue };
