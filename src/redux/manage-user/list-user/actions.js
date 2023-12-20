const actions = {
  GET_LIST_USER_BEGIN: 'GET_LIST_USER_BEGIN',
  GET_LIST_USER_SUCCESS: 'GET_LIST_USER_SUCCESS',

  getListUserBegin: () => {
    return {
      type: actions.GET_LIST_USER_BEGIN,
    };
  },

  getListUserSuccess: (data) => {
    return {
      type: actions.GET_LIST_USER_SUCCESS,
      data,
    };
  },
};

export default actions;
