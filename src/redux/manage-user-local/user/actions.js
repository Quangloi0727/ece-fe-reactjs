const actions = {
  GET_USER_BEGIN: 'GET_USER_BEGIN',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_ERROR: 'GET_USER_ERROR',

  getUserBegin: () => {
    return {
      type: actions.GET_USER_BEGIN,
    };
  },

  getUserSuccess: (user) => {
    return {
      type: actions.GET_USER_SUCCESS,
      user,
    };
  },
  getUserError: (err) => {
    return {
      type: actions.GET_USER_ERROR,
      err,
    };
  },
};

export default actions;
