import actions from './actions';
import staticConfig from '../../../config/manage-mail/filter-advance.json';
import { getItem } from '../../../utility/localStorageControl';

const { CONFIG_FILTER_ADVANCE_SUCCESS } = actions;
const initState = {
  config: getItem('configFilterAdvance') !== null ? getItem('configFilterAdvance') : [...staticConfig],
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
