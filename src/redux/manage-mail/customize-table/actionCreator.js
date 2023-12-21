import actions from './actions';
import { DataService } from '../../../config/dataService/dataService';
import { setItem } from '../../../utility/localStorageControl';
import { LOCAL_STORAGE_VARIABLE, STATUS_CODE_SUCCESS } from '../../../constants';

const { customizeTableBegin, customizeTableSuccess, customizeTableError } = actions;

const submitCustomizeTable = (dataConfig, successCallback, errorCallback) => {
  return async (dispatch) => {
    try {
      dispatch(customizeTableBegin());
      const response = await DataService.post('/config-columns', { config: dataConfig });
      if (STATUS_CODE_SUCCESS.includes(response.status)) {
        await setItem(LOCAL_STORAGE_VARIABLE.CUSTOMIZE_TABLE, dataConfig);
        dispatch(customizeTableSuccess(dataConfig));
        successCallback();
      } else {
        dispatch(customizeTableError(response.data.errors[0]));
        errorCallback(response.data.errors[0]);
      }
    } catch (err) {
      dispatch(customizeTableError(err.message));
      errorCallback(err.message);
    }
  };
};

export { submitCustomizeTable };
