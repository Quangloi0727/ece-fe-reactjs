import actions from './actions';
import { DataService } from '../../../config/dataService/dataService';

const { dataTableReadBegin, dataTableReadSuccess, dataTableReadErr } = actions;

const tableReadData = (page, pageSize, searchMulti, filterAdvance) => {
  return async (dispatch) => {
    try {
      dispatch(dataTableReadBegin());
      const listEmail = await DataService.get(
        `/manage-email/get-list?page=${page}&pageSize=${pageSize || 10}&searchMulti=${searchMulti}`,
        filterAdvance,
      );

      dispatch(dataTableReadSuccess(listEmail?.data?.data, listEmail?.data?.totalData || 0));
    } catch (err) {
      dispatch(dataTableReadErr(err));
    }
  };
};

export { tableReadData };
