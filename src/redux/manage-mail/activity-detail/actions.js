const actions = {
  ACTIVITY_DETAIL_BEGIN: 'ACTIVITY_DETAIL_BEGIN',
  ACTIVITY_DETAIL_SUCCESS: 'ACTIVITY_DETAIL_SUCCESS',
  ACTIVITY_DETAIL_ERR: 'ACTIVITY_DETAIL_ERR',

  activityDetailBegin: () => {
    return {
      type: actions.ACTIVITY_DETAIL_BEGIN,
    };
  },

  activityDetailSuccess: (data) => {
    return {
      type: actions.ACTIVITY_DETAIL_SUCCESS,
      data,
    };
  },

  activityDetailErr: (err) => {
    return {
      type: actions.ACTIVITY_DETAIL_ERR,
      err,
    };
  },
};

export default actions;
