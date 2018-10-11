// action types
const API_CALL_REQUEST_POSTS = "API_CALL_REQUEST_POSTS";
const API_CALL_REQUEST_POST = "API_CALL_REQUEST_POST";
const API_CALL_SUCCESS_POST = "API_CALL_SUCCESS_POST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

// reducer with initial state
const initialState = {
    fetching: false,
    posts: [],
    users: [],
    post:{},
    updatePosts: [],
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case API_CALL_REQUEST_POSTS:
            return { ...state, fetching: true, error: null };
        case API_CALL_REQUEST_POST:
            return { ...state, fetching: true, error: null };
        case API_CALL_SUCCESS_POST:
            return { ...state, fetching: true, post: action.post };
        case API_CALL_SUCCESS:
            return { ...state, fetching: true, posts: action.posts, post:{}, users: action.users, updatePosts: action.updatePosts };
        case API_CALL_FAILURE:
            return { ...state, fetching: false, posts: [], users: [], error: action.error };
        default:
            return state;
    }
}