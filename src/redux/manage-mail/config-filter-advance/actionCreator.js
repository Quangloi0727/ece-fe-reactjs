import actions from './actions';

const { configFilterAdvanceBegin, configFilterAdvanceSuccess } = actions;

const configFilterAdvance = (configFilterAdvance) => {
  return async (dispatch) => {
    dispatch(configFilterAdvanceBegin());
    dispatch(configFilterAdvanceSuccess(configFilterAdvance));
  };
};
export { configFilterAdvance };
