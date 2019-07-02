import { ADD_TOOL, REMOVE_TOOL, UPDATE_TOOL } from '../actions';

const INITIAL_STATE = [];

export default function Tool(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TOOL:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          link: action.link,
          description: action.description,
          tags: action.tags,
        },
      ];
    case REMOVE_TOOL:
      return state.filter(({ id }) => id !== action.id);
    case UPDATE_TOOL:
      return state.map(tool => (tool.id === action.id ? { ...tool, ...action } : tool));
    default:
      return state;
  }
}
