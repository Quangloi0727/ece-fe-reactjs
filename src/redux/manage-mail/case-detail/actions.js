const actions = {
  CASE_DETAIL_BEGIN: 'CASE_DETAIL_BEGIN',
  CASE_DETAIL_SUCCESS: 'CASE_DETAIL_SUCCESS',
  CASE_DETAIL_ERR: 'CASE_DETAIL_ERR',

  caseDetailBegin: () => {
    return {
      type: actions.CASE_DETAIL_BEGIN,
    };
  },

  caseDetailSuccess: (data) => {
    return {
      type: actions.CASE_DETAIL_SUCCESS,
      data,
    };
  },

  caseDetailErr: (err) => {
    return {
      type: actions.CASE_DETAIL_ERR,
      err,
    };
  },
};

export default actions;
