import actions from './actions';

const { GET_LIST_DATA_FILE_SUCCESS } = actions;

const initState = {
  dataFile: [],
  dataFileColumn: [],
  totalData: 0,
};

const dataListFile = (state = initState, action) => {
  const { type, dataFile, totalData, dataFileColumn } = action;
  switch (type) {
    case GET_LIST_DATA_FILE_SUCCESS:
      return {
        ...initState,
        dataFile,
        totalData,
        dataFileColumn,
      };
    default:
      return state;
  }
};

export default dataListFile;
