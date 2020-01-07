const initialState = {
  data: [],
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case '@tool/GET_SUCCESS':
      return {
        ...state,
        data: action.payload.data,
      };

    case '@tool/DELETE_REQUEST':
      // const { id } = action.payload;

      return {
        ...state,
        data: state.data.filter(tool => tool.id !== action.id),
      };

    default:
      return state;
  }
}
