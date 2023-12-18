import actions from './actions';
import { DataService } from '../../../config/dataService/dataService';

const { caseDetailBegin, caseDetailSuccess, caseDetailErr } = actions;

const caseDetailData = (caseId) => {
  return async (dispatch) => {
    try {
      dispatch(caseDetailBegin());
      const response = await DataService.get(`/manage-email/case-detail/${caseId}`);
      await dispatch(caseDetailSuccess(response?.data?.data));
    } catch (err) {
      dispatch(caseDetailErr(err));
    }
  };
};

export { caseDetailData };
