const actions = {
  SETTING_TABLE_BEGIN: 'SETTING_TABLE_BEGIN',
  SETTING_TABLE_SUCCESS: 'SETTING_TABLE_SUCCESS',
  SETTING_TABLE_ERR: 'SETTING_TABLE_ERR',

  settingTableBegin: () => {
    return {
      type: actions.SETTING_TABLE_BEGIN,
    };
  },

  settingTableSuccess: (data) => {
    return {
      type: actions.SETTING_TABLE_SUCCESS,
      data,
    };
  },

  settingTableErr: (err) => {
    return {
      type: actions.SETTING_TABLE_ERR,
      err,
    };
  },
};

export default actions;
