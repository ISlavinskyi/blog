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

function addComment(comment) {
    const {id, postId} = comment;
    const localId = `${postId}%${id}`;
    localStorage.setItem(localId, JSON.stringify({...comment}));
}

function* workerSagaComment({allComments, newComment}) {
    try {
        yield addComment(newComment);
        const comments = [...allComments, newComment];
        yield put({type: "API_CALL_SUCCESS_COMMENT", comments});
    } catch (error) {
        yield put({type: "API_CALL_FAILURE", error});
    }
}

function localComments(postId) {
    let localData = [];
        for (let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            if(key.split('%')[0] === postId) {
                let item = localStorage.getItem(key);
                localData.push(JSON.parse(item));
            }
        }
        return localData

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
        const local = yield localComments(postId);
        let comments = response.data;
        if(local.length) {
            comments = [...comments, ...local];
        }
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