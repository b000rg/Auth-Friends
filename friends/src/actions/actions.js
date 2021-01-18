import axios from "axios";
import { axiosWithAuth } from "../axiosAuth";

const SERVER_URL = "http://localhost:5000";

export const ERROR = "ERROR";
export const LOG_IN_REQUESTED = "LOG_IN_REQUESTED";
export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const FOUND_LOCAL_TOKEN = "FOUND_LOCAL_TOKEN";
export const LOG_OUT = "LOG_OUT";
export const FETCHING_FRIENDS_DATA = "FETCHING_FRIENDS_DATA";
export const FETCHED_FRIENDS_DATA = "FETCHED_FRIENDS_DATA";

export const login = credentials => dispatch => {
    dispatch({ type: LOG_IN_REQUESTED });
    axios
        .post(SERVER_URL + "/api/login", credentials)
        .then(res => {
            dispatch({ type: USER_LOGGED_IN, payload: res.data.payload });
            localStorage.setItem("token", res.data.payload);
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err });
        });
};

export const foundLocalToken = token => {
    return { type: FOUND_LOCAL_TOKEN, payload: token };
};

export const logout = () => {
    localStorage.removeItem("token");
    return { type: LOG_OUT };
};

export const getFriendsList = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS_DATA });
    axiosWithAuth()
        .get(SERVER_URL + "/api/friends")
        .then(res => {
            dispatch({ type: FETCHED_FRIENDS_DATA, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err });
        });
};
