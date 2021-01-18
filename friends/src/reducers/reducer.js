import {
    LOG_IN_REQUESTED,
    USER_LOGGED_IN,
    FOUND_LOCAL_TOKEN,
    LOG_OUT,
    FETCHING_FRIENDS_DATA,
    FETCHED_FRIENDS_DATA,
    ERROR,
} from "../actions/actions";

const defaultState = {
    token: "",
    friends: [],
    loading: false,
    errors: [],
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOG_IN_REQUESTED:
            return { ...state, loading: true };
        case USER_LOGGED_IN:
            return { ...state, loading: false, token: action.payload };
        case FOUND_LOCAL_TOKEN:
            return { ...state, token: action.payload };
        case LOG_OUT:
            return { ...state, token: "" };
        case FETCHING_FRIENDS_DATA:
            return { ...state, loading: true };
        case FETCHED_FRIENDS_DATA:
            return { ...state, loading: false, friends: action.payload };
        case ERROR:
            return { ...state, errors: [...state.errors, action.payload] };
        default:
            return state;
    }
};

export default reducer;
