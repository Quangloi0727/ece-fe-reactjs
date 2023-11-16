import actions from './actions';
import initialState from '../../demoData/data-setting-table.json';

const { settingTableBegin, settingTableSuccess, settingTableErr } = actions;

const settingTableData = () => {
  return async (dispatch) => {
    try {
      dispatch(settingTableBegin());
      dispatch(settingTableSuccess(initialState));
    } catch (err) {
      dispatch(settingTableErr(err));
    }
  };
};

export { settingTableData };
