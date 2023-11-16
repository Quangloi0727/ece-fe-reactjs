import actions from './actions';
import staticData from '../../demoData/data-setting-table.json';

const { SETTING_TABLE_SUCCESS, SETTING_TABLE_ERR } = actions;

const dataSettingTable = (state = staticData, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SETTING_TABLE_SUCCESS:
      return data;
    case SETTING_TABLE_ERR:
      return err;
    default:
      return state;
  }
};

export { dataSettingTable };
