import actions from './actions';
import { DataService } from '../../../config/dataService/dataService';

const { activityDetailBegin, activityDetailSuccess, activityDetailErr } = actions;

const activityDetailData = (activityId) => {
  return async (dispatch) => {
    try {
      dispatch(activityDetailBegin());
      const response = await DataService.get(`/manage-email/activity-detail/${activityId}`);
      await dispatch(activityDetailSuccess(response?.data?.data));
    } catch (err) {
      dispatch(activityDetailErr(err));
    }
  };
};

export { activityDetailData };
