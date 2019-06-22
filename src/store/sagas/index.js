import { all, takeLatest } from 'redux-saga/effects';

import { Types as ToolsListTypes } from '../ducks/toolsList';

import { getToolsList } from './toolsList';

export default function* rootSaga() {
  yield all([takeLatest(ToolsListTypes.GET_REQUEST, getToolsList)]);
}
