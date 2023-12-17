import actions from './actions';
import { DataService } from '../../../config/dataService/dataService';

const { dataTableReadBegin, dataTableReadSuccess, dataTableReadErr } = actions;

const tableReadData = (page, pageSize, searchMulti) => {
  return async (dispatch) => {
    try {
      dispatch(dataTableReadBegin());
      const listEmail = await DataService.get(
        `/manage-email/get-list?page=${page}&pageSize=${pageSize}&searchMulti=${searchMulti}`,
      );
      dispatch(dataTableReadSuccess(listEmail?.data?.data, listEmail?.data?.totalData || 0));
    } catch (err) {
      dispatch(dataTableReadErr(err));
    }
  };
};

export { tableReadData };
