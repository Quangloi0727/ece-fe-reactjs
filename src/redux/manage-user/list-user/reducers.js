import actions from './actions';

const { GET_LIST_USER_SUCCESS } = actions;

const initState = {
  data: [],
};

const dataListUser = (state = initState, action) => {
  const { type, data } = action;
  switch (type) {
    case GET_LIST_USER_SUCCESS:
      return {
        ...initState,
        data,
      };
    default:
      return state;
  }
};

export default dataListUser;
