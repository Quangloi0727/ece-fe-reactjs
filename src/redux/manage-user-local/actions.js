const actions = {
  GET_LIST_USER_BEGIN: 'GET_LIST_USER_BEGIN',
  GET_LIST_USER_SUCCESS: 'GET_LIST_USER_SUCCESS',

  getListUserBegin: () => {
    return {
      type: actions.GET_LIST_USER_BEGIN,
    };
  },

  getListUserSuccess: (dataUser, totalData, dataUserColumn) => {
    return {
      type: actions.GET_LIST_USER_SUCCESS,
      dataUser,
      totalData,
      dataUserColumn,
    };
  },
};

export default actions;
