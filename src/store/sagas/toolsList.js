import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ToolsListACtions } from '../ducks/toolsList';

export function* getToolsList() {
  try {
    const response = yield call(api.get, '/tools');

    yield put(ToolsListACtions.getToolsListSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
