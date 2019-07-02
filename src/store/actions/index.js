export const ADD_TOOL = 'ADD_TOOL';
export const REMOVE_TOOL = 'REMOVE_TOOL';
export const UPDATE_TOOL = 'UPDATE_TOOL';

const nextId = 0;

export function addTool(title, link, description, tags) {
  return {
    type: ADD_TOOL,
    id: nextId,
    title,
    link,
    description,
    tags,
  };
}

export function removeTool(id) {
  return {
    type: REMOVE_TOOL,
    id,
  };
}

export function updateTool(id, title, link, description, tags) {
  return {
    type: UPDATE_TOOL,
    id,
    title,
    link,
    description,
    tags,
  };
}
