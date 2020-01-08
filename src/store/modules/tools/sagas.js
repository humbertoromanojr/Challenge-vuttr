import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { getToolsSuccess } from './actions';

export function* getTools({ payload }) {
  try {
    const { search } = payload;

    const response = yield call(api.get, `tools?q=${search}`);

    yield put(getToolsSuccess(response.data));
  } catch (error) {
    toast.error('Problemas na listagens de ferramentas');
  }
}

export function* createTool({ payload }) {
  try {
    const { data } = payload;

    yield call(api.post, 'tools', data);

    toast.success('Ferramenta criado com sucesso');
    history.push('/');
  } catch (error) {
    toast.error('Falha: Ferramenta não foi criado');
  }
}

export function* updateTool({ payload }) {
  try {
    const { id, data } = payload;

    yield call(api.put, `tools/${id}`, data);

    toast.success('Ferramenta atualizada com sucesso');
  } catch (error) {
    toast.error('Falha: Ferramenta não foi atualizada');
  }
}

export function* deleteTool({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `tools/${id}`);

    toast.success('Ferramenta deletada com sucesso');
    history.push('/');
  } catch (error) {
    toast.error('Falha: Ferramenta não foi removida');
  }
}

export default all([
  takeLatest('@tool/GET_REQUEST', getTools),
  takeLatest('@tool/DELETE_REQUEST', deleteTool),
  takeLatest('@tool/UPDATE_REQUEST', updateTool),
  takeLatest('@tool/CREATE_REQUEST', createTool),
]);
