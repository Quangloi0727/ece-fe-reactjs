import actions from './actions';

const { DATA_TABLE_READ_BEGIN, DATA_TABLE_READ_SUCCESS, DATA_TABLE_READ_ERR } = actions;

const initialState = {
  tableData: [],
  loading: false,
  error: null,
};

const dataTableEmailReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case DATA_TABLE_READ_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case DATA_TABLE_READ_SUCCESS:
      return {
        ...initialState,
        tableData: data,
        loading: false,
      };
    case DATA_TABLE_READ_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default dataTableEmailReducer;
