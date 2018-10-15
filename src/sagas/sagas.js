import {takeLatest, call, put} from 'redux-saga/effects';
import axios from 'axios';

export function* watcherSaga() {
    yield takeLatest('API_CALL_REQUEST_POSTS', workerSaga);
    yield takeLatest('API_CALL_REQUEST_POST', workerSagaPost);
    yield takeLatest('API_CALL_REQUEST_COMMENTS', workerSagaComments);
    yield takeLatest('API_CALL_ADD_COMMENT', workerSagaComment);
}

function fetchData(path) {
    return axios({
        method: 'get',
        url: `https://jsonplaceholder.typicode.com/${path}`
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

function* workerSagaComment({allComments, newComment}) {
    try {
        const comments = [...allComments, newComment];

        yield put({type: "API_CALL_SUCCESS_COMMENT", comments});
    } catch (error) {
        yield put({type: "API_CALL_FAILURE", error});
    }
}

function* workerSagaPost({postId}) {
    try {
        const path = `posts/${postId}`;
        const response = yield call(fetchData, path);
        const post = response.data;
        yield put({type: "API_CALL_SUCCESS_POST", post});
    } catch (error) {
        yield put({type: "API_CALL_FAILURE", error});
    }
}

function* workerSagaComments({postId}) {
    try {
        const path = `comments?postId=${postId}`;
        const response = yield call(fetchData, path);
        const comments = response.data;
        yield put({type: "API_CALL_SUCCESS_COMMENTS", comments});
    } catch (error) {
        yield put({type: "API_CALL_FAILURE", error});
    }
}

function* workerSaga() {
    try {
        const postsResponse = yield call(fetchData, 'posts');
        const posts = postsResponse.data;
        // I don't know why, but jsonplaceholder.typicode response 104 elements))
        posts.length = 100;
        const usersResponse = yield call(fetchData, 'users');
        const users = usersResponse.data;

        const updatePosts = userToPost(posts, users);

        yield put({type: "API_CALL_SUCCESS", posts, users, updatePosts});

    } catch (error) {
        yield put({type: "API_CALL_FAILURE", error});
    }
}