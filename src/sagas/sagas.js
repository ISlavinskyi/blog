import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

export function* watcherSaga() {
    yield takeLatest('API_CALL_REQUEST', workerSaga);
}

function fetchPosts() {
    return axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts'
    });
}

function* workerSaga() {
    try {
        const response = yield call(fetchPosts);
        const posts = response.data;

        yield put({ type: "API_CALL_SUCCESS", posts });

    } catch (error) {
        yield put({ type: "API_CALL_FAILURE", error });
    }
}