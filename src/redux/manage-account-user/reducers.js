import actions from './actions';

const { GET_LIST_USER_SUCCESS } = actions;

const initState = {
  dataUser: [],
  dataUserColumn: [],
  user: null,
  totalData: 0,
};

const listDataUser = (state = initState, action) => {
  const { type, dataUser, totalData, dataUserColumn } = action;
  switch (type) {
    case GET_LIST_USER_SUCCESS:
      return {
        ...initState,
        dataUser,
        totalData,
        dataUserColumn,
      };
    default:
      return state;
  }
};

export default listDataUser;
