import actions from './actions';
import { DataService } from '../../../config/dataService/dataService';
import dataFileColumn from '../../../config/manage-user/config-header-import-file.json';
import { STATUS_CODE_SUCCESS } from '../../../constants';

const { getListDataFileImportBegin, getListDataFileImportSuccess } = actions;

const getListFile = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(getListDataFileImportBegin());
    const dataFile = await DataService.get(`/import-excel?page=${page}&pageSize=${pageSize}`);
    await dispatch(getListDataFileImportSuccess(dataFile?.data?.data[0], dataFile?.data?.data[1], dataFileColumn));
  };
};
const addFile = (file) => {
  return async (dispatch) => {
    dispatch(getListDataFileImportBegin());
    await DataService.post('/file', { data: file });
  };
};
const downloadTemplateExcel = () => {
  return async (dispatch) => {
    dispatch(getListDataFileImportBegin());
    await DataService.downloadTemplate('/import-excel/template').then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'File_Mau_Import_Account.xlsx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };
};
const importExcel = (formData, successCallback, errorCallback) => {
  return async (dispatch) => {
    try {
      dispatch(getListDataFileImportBegin());
      const response = await DataService.post('/import-excel/upload', formData);
      if (STATUS_CODE_SUCCESS.includes(response.status)) {
        successCallback();
      } else {
        errorCallback(response.data.errors[0]);
      }
    } catch (err) {
      errorCallback(err.message);
    }
  };
};
export { getListFile, addFile, downloadTemplateExcel, importExcel };
