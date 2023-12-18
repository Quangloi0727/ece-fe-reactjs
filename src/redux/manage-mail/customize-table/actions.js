const actions = {
  CUSTOMIZE_TABLE_BEGIN: 'CUSTOMIZE_TABLE_BEGIN',
  CUSTOMIZE_TABLE_SUCCESS: 'CUSTOMIZE_TABLE_SUCCESS',
  CUSTOMIZE_TABLE_ERROR: 'CUSTOMIZE_TABLE_ERROR',

  customizeTableBegin: () => {
    return {
      type: actions.CUSTOMIZE_TABLE_BEGIN,
    };
  },

  customizeTableSuccess: (config) => {
    return {
      type: actions.CUSTOMIZE_TABLE_SUCCESS,
      config,
    };
  },

  customizeTableError: (err) => {
    return {
      type: actions.CUSTOMIZE_TABLE_ERROR,
      err,
    };
  },
};

export default actions;
