import actions from './actions';
import initialState from '../../demoData/data-table.json';

const { dataTableReadBegin, dataTableReadSuccess, dataTableReadErr } = actions;

const tableReadData = () => {
  return async (dispatch) => {
    try {
      dispatch(dataTableReadBegin());
      dispatch(dataTableReadSuccess(initialState));
    } catch (err) {
      dispatch(dataTableReadErr(err));
    }
  };
};

export { tableReadData };
