import actions from './actions';
import staticConfig from '../../../config/manage-mail/filter-advance.json';
import { getItem } from '../../../utility/localStorageControl';
import { LOCAL_STORAGE_VARIABLE } from '../../../constants';

const { CONFIG_FILTER_ADVANCE_SUCCESS } = actions;
const initState = {
  config:
    getItem(LOCAL_STORAGE_VARIABLE.FILTER_ADVANCE) !== null
      ? getItem(LOCAL_STORAGE_VARIABLE.FILTER_ADVANCE)
      : [...staticConfig],
};
const configFilterAdvance = (state = initState, action) => {
  const { type, config } = action;
  switch (type) {
    case CONFIG_FILTER_ADVANCE_SUCCESS:
      return {
        ...state,
        config,
      };
    default:
      return state;
  }
};

export default configFilterAdvance;
