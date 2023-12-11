const actions = {
  CONFIG_FILTER_ADVANCE_BEGIN: 'CONFIG_FILTER_ADVANCE_BEGIN',
  CONFIG_FILTER_ADVANCE_SUCCESS: 'CONFIG_FILTER_ADVANCE_SUCCESS',

  configFilterAdvanceBegin: () => {
    return {
      type: actions.FILTER_TABLE_BEGIN,
    };
  },

  configFilterAdvanceSuccess: (config) => {
    return {
      type: actions.CONFIG_FILTER_ADVANCE_SUCCESS,
      config,
    };
  },
};

export default actions;
