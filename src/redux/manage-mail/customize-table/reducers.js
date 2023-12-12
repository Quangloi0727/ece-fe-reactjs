import actions from './actions';
import customizeTableOrigin from '../../../config/manage-mail/customize-table.json';
import { getItem } from '../../../utility/localStorageControl';
import { LOCAL_STORAGE_VARIABLE } from '../../../constants';

const { CUSTOMIZE_TABLE_SUCCESS, CUSTOMIZE_TABLE_ERROR } = actions;
const initState = {
  config:
    getItem(LOCAL_STORAGE_VARIABLE.CUSTOMIZE_TABLE) !== null
      ? getItem(LOCAL_STORAGE_VARIABLE.CUSTOMIZE_TABLE)
      : [...customizeTableOrigin],
};
const customizeTable = (state = initState, action) => {
  const { type, config, err } = action;
  switch (type) {
    case CUSTOMIZE_TABLE_SUCCESS:
      return {
        ...state,
        config,
      };
    case CUSTOMIZE_TABLE_ERROR:
      return {
        err,
      };
    default:
      return state;
  }
};

export default customizeTable;
