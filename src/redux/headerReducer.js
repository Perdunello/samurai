import {API} from "../api/api";
import {call, put, takeEvery} from "redux-saga/effects";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const IS_AUTH_ME_REQUEST = 'IS_AUTH_ME_REQUEST'
const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGOUT_REQUEST = 'LOGOUT_REQUEST'

let stateInitial = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

let headerReducer = (state = stateInitial, action) => {
    if (action.type === SET_AUTH_USER_DATA) {
        return {
            ...state,
            ...action.data,
        }
    } else
        return state
}

export let setAuthUserData = (id, login, email, isAuth = true) => {
    return {type: SET_AUTH_USER_DATA, data: {id, login, email, isAuth}}
}

export const isAuthMeRequest = (payload) => {
    return {type: IS_AUTH_ME_REQUEST, payload}
}
export const loginRequest = (payload) => {
    return {type: LOGIN_REQUEST, payload}
}
export const logoutRequest = (payload) => {
    return {type: LOGOUT_REQUEST, payload}
}

function* isAuthMe() {
    const data = yield call(API.isAuthMe)
    if (data.resultCode === 0) {
        yield put(setAuthUserData(data.data.id, data.data.login, data.data.email))
    }
}

function* login(action) {
    const response = yield call(API.login, action.payload)
    if (response.data.resultCode === 0) {
        yield put(isAuthMeRequest())
    }
}

function* logout() {
    const response = yield call(API.logout)
    if (response.data.resultCode === 0) {
        yield put(setAuthUserData(null, null, null, false))
    }
}

export function* headerWatcher() {
    yield takeEvery(IS_AUTH_ME_REQUEST, isAuthMe)
    yield takeEvery(LOGIN_REQUEST, login)
    yield takeEvery(LOGOUT_REQUEST, logout)
}

export default headerReducer;