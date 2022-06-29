import {API} from "../api/api";
import {takeEvery, call, put} from 'redux-saga/effects'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const GET_DATA_USER_PROFILE_REQUEST = 'GET_DATA_USER_PROFILE_REQUEST'
const STATUS_REQUEST = 'STATUS_REQUEST'
const UPDATE_STATUS_REQUEST = 'UPDATE_STATUS_REQUEST'

let initialState = {
    postsData: [
        {id: 1, message: 'Hello', likesCount: 10},
        {id: 2, message: 'Bye', likesCount: 0},
        {id: 3, message: 'DADA', likesCount: 5},
        {id: 3, message: 'ggg', likesCount: 3}
    ],
    newPostText: '',
    profile: null,
    status: '',
}
let profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
        }
        return {
            ...state,
            postsData: [...state.postsData, newPost],
            newPostText: '',
        }
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        return {
            ...state,
            newPostText: action.text,
        }
    } else if (action.type === SET_USER_PROFILE) {
        return {...state, profile: action.profile}
    } else if (action.type === SET_STATUS) {
        return {
            ...state,
            status: action.status
        }

    } else return state
}
export const addPost = () => {
    return {type: ADD_POST,}
}
export const updateNewPostText = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, text: text}
}
const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}
const setStatus = (status) => {
    return {type: SET_STATUS, status: status}
}
export const getDataUserProfileRequest = (payload) => {
    return {type: GET_DATA_USER_PROFILE_REQUEST, payload}
}
export const statusRequest = (payload) => {
    return {type: STATUS_REQUEST, payload}
}
export const updateStatusRequest = (payload) => {
    return {type: UPDATE_STATUS_REQUEST, payload}
}

function* getDataUserProfile(action) {
    const data = yield call(API.getDataUserProfile, action.payload)
    yield put(setUserProfile(data))
}

function* getStatus(action) {
    const data = yield call(API.getStatus, action.payload)
    yield put(setStatus(data))
}

function* updateStatus(action) {
    const data = yield call(API.updateStatus, action.payload)
    if (data.data.resultCode === 0) {
        yield put(setStatus(action.payload))
    }
}

export function* profileWatcher() {
    yield takeEvery(GET_DATA_USER_PROFILE_REQUEST, getDataUserProfile)
    yield takeEvery(STATUS_REQUEST, getStatus)
    yield takeEvery(UPDATE_STATUS_REQUEST, updateStatus)
}

export default profileReducer