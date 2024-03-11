import actions from './actions';

const { GET_USER_BEGIN, GET_USER_SUCCESS } = actions;

const initState = {
  user: null,
  isLoading: false,
};

const getUser = (state = initState, action) => {
  const { type, user } = action;
  switch (type) {
    case GET_USER_BEGIN:
      return {
        ...initState,
        isLoading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...initState,
        user,
      };
    default:
      return state;
  }
};

export default getUser;
