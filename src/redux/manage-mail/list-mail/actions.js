const actions = {
  DATA_TABLE_READ_BEGIN: 'DATA_TABLE_READ_BEGIN',
  DATA_TABLE_READ_SUCCESS: 'DATA_TABLE_READ_SUCCESS',
  DATA_TABLE_READ_ERR: 'DATA_TABLE_READ_ERR',

  dataTableReadBegin: () => {
    return {
      type: actions.DATA_TABLE_READ_BEGIN,
    };
  },

  dataTableReadSuccess: (data, totalData) => {
    return {
      type: actions.DATA_TABLE_READ_SUCCESS,
      data,
      totalData,
    };
  },

  dataTableReadErr: (err) => {
    return {
      type: actions.DATA_TABLE_READ_ERR,
      err,
    };
  },
};

export default actions;
