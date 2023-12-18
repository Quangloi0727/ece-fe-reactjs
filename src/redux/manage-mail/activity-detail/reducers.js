import actions from './actions';

const { ACTIVITY_DETAIL_SUCCESS, ACTIVITY_DETAIL_ERR } = actions;

const initState = {
  data: {},
  error: null,
};

const dataActivityDetail = (state = initState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case ACTIVITY_DETAIL_SUCCESS:
      return {
        ...initState,
        data,
      };
    case ACTIVITY_DETAIL_ERR:
      return {
        ...initState,
        error: err,
      };
    default:
      return state;
  }
};

export default dataActivityDetail;
