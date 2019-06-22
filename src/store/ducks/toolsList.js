export const Types = {
  GET_REQUEST: 'toolsList/GET_REQUEST',
  GET_SUCCESS: 'toolsList/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function toolsList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getToolsListRequest: () => ({ type: Types.GET_REQUEST }),

  getToolsListSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
