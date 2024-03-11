const actions = {
  GET_LIST_DATA_FILE_BEGIN: 'GET_LIST_DATA_FILE_BEGIN',
  GET_LIST_DATA_FILE_SUCCESS: 'GET_LIST_DATA_FILE_SUCCESS',

  getListDataFileImportBegin: () => {
    return {
      type: actions.GET_LIST_DATA_FILE_BEGIN,
    };
  },

  getListDataFileImportSuccess: (dataFile, totalData, dataFileColumn) => {
    return {
      type: actions.GET_LIST_DATA_FILE_SUCCESS,
      dataFile,
      totalData,
      dataFileColumn,
    };
  },
};

export default actions;
