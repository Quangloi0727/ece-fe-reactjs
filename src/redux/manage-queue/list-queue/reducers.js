import actions from './actions';

const { GET_LIST_QUEUE_SUCCESS } = actions;

const initState = {
  data: [],
};

const dataListQueue = (state = initState, action) => {
  const { type, data } = action;
  switch (type) {
    case GET_LIST_QUEUE_SUCCESS:
      return {
        ...initState,
        data,
      };
    default:
      return state;
  }
};

export default dataListQueue;
