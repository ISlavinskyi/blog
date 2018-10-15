// action types
const API_CALL_REQUEST_POSTS = "API_CALL_REQUEST_POSTS";
const API_CALL_REQUEST_COMMENTS = "API_CALL_REQUEST_COMMENTS";
const API_CALL_REQUEST_POST = "API_CALL_REQUEST_POST";
const API_CALL_ADD_COMMENT = "API_CALL_ADD_COMMENT";
const API_CALL_SUCCESS_COMMENTS = "API_CALL_SUCCESS_COMMENTS";
const API_CALL_SUCCESS_COMMENT = "API_CALL_SUCCESS_COMMENT";
const API_CALL_SUCCESS_POST = "API_CALL_SUCCESS_POST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";
const TITLE_SEARCH_REQUEST = "TITLE_SEARCH_REQUEST";
const TITLE_SEARCH_SUCCESS = "TITLE_SEARCH_SUCCESS";

// reducer with initial state
const initialState = {
    fetching: false,
    posts: [],
    users: [],
    comments: [],
    post:{},
    updatePosts: [],
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case API_CALL_REQUEST_POSTS:
            return { ...state, fetching: true, error: null };
        case API_CALL_REQUEST_COMMENTS:
            return { ...state, fetching: true, error: null };
        case API_CALL_REQUEST_POST:
            return { ...state, fetching: true, error: null };
        case API_CALL_SUCCESS_POST:
            return { ...state, fetching: true, post: action.post };
        case API_CALL_ADD_COMMENT:
            return { ...state, fetching: true, error: null };
        case API_CALL_SUCCESS_COMMENTS:
            return { ...state, fetching: true, comments: action.comments };
        case API_CALL_SUCCESS_COMMENT:
            return { ...state, fetching: true, comments: action.comments };
        case API_CALL_SUCCESS:
            return { ...state, fetching: true, posts: action.posts, post:{},  users: action.users, updatePosts: action.updatePosts };
        case API_CALL_FAILURE:
            return { ...state, fetching: false, posts: [], users: [], comments: [], error: action.error };
        case TITLE_SEARCH_REQUEST:
            return { ...state, fetching: true, error: null };
        case TITLE_SEARCH_SUCCESS:
            return { ...state, fetching: true, updatePosts: action.updatePosts };
        default:
            return state;
    }
}