const actions = {
  GET_LIST_QUEUE_BEGIN: 'GET_LIST_QUEUE_BEGIN',
  GET_LIST_QUEUE_SUCCESS: 'GET_LIST_QUEUE_SUCCESS',

  getListQueueBegin: () => {
    return {
      type: actions.GET_LIST_QUEUE_BEGIN,
    };
  },

  getListQueueSuccess: (data) => {
    return {
      type: actions.GET_LIST_QUEUE_SUCCESS,
      data,
    };
  },
};

export default actions;
