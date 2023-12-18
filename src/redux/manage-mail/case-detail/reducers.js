import actions from './actions';

const { CASE_DETAIL_SUCCESS, CASE_DETAIL_ERR } = actions;

const initState = {
  data: {},
  error: null,
};

const dataCaseDetail = (state = initState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case CASE_DETAIL_SUCCESS:
      return {
        ...initState,
        data,
      };
    case CASE_DETAIL_ERR:
      return {
        ...initState,
        error: err,
      };
    default:
      return state;
  }
};

export default dataCaseDetail;
