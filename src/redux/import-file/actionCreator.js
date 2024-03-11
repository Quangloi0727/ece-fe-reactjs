import actions from './actions';
import { DataService } from '../../config/dataService/dataService';
import dataFileColumn from '../../config/manage-user/configColumnFile.json';

const { getListDataFileImportBegin, getListDataFileImportSuccess } = actions;

const getListFile = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(getListDataFileImportBegin());
    const dataFile = await DataService.getUser(`/file?page=${page}&pageSize=${pageSize}`);
    await dispatch(getListDataFileImportSuccess(dataFile?.data?.data[0], dataFile?.data?.data[1], dataFileColumn));
  };
};
const addFile = (file) => {
  return async (dispatch) => {
    dispatch(getListDataFileImportBegin());
    await DataService.post('/file', { data: file });
  };
};
export { getListFile, addFile };
