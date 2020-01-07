export function getToolsRequest(search) {
  return {
    type: '@tool/GET_REQUEST',
    payload: { search },
  };
}

export function getToolsSuccess(data) {
  return {
    type: '@tool/GET_SUCCESS',
    payload: { data },
  };
}

export function createToolRequest(data) {
  return {
    type: '@tool/CREATE_REQUEST',
    payload: { data },
  };
}
export function updateToolRequest(id, data) {
  return {
    type: '@tool/UPDATE_REQUEST',
    payload: { id, data },
  };
}

export function deleteToolRequest(id) {
  return {
    type: '@tool/DELETE_REQUEST',
    payload: { id },
  };
}
