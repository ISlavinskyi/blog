import {takeLatest, call, put} from 'redux-saga/effects';
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

function fetchUsers() {
    return axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users'
    });
}

function userToPost(posts, users) {
    return posts.map(post => {
        const userId = post.userId;
        const user = users.filter(user => {
            return userId === user.id;
        });
        const {username} = user[0];
        return Object.assign({}, post, {username});
    })
}

function* workerSaga() {
    try {
        const postsResponse = yield call(fetchPosts);
        const posts = postsResponse.data;

        const usersResponse = yield call(fetchUsers);
        const users = usersResponse.data;

        const updatePosts = userToPost(posts, users);

        yield put({type: "API_CALL_SUCCESS", posts, users, updatePosts});

    } catch (error) {
        yield put({type: "API_CALL_FAILURE", error});
    }
}