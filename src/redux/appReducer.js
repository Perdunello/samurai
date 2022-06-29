import {isAuthMeRequest} from "./headerReducer";
import {put, takeEvery} from "redux-saga/effects";

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS'
const INITIAL_APP_REQUEST = 'INITIAL_APP_REQUEST'
let initialState = {
    initialized: false,
}

let appReducer = (state = initialState, action) => {
    if (action.type === SET_INITIALIZED_SUCCESS) {
        return {
            ...state,
            initialized: true,
        }
    } else {
        return state
    }
}

const setInitializedSuccess = () => {
    return {type: SET_INITIALIZED_SUCCESS}
}
export const initialAppRequest = (payload) => {
    return {type: INITIAL_APP_REQUEST, payload}
}

function* initializeApp() {
    yield put(isAuthMeRequest())
    yield put(setInitializedSuccess())
}

export function* appWatcher() {
    yield takeEvery(INITIAL_APP_REQUEST, initializeApp)
}

export default appReducer;
