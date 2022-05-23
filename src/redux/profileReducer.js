import {API} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

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
        return  {
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

export const getDataUserProfile = (userId) => {
    return (dispatch) => {
        API.getDataUserProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}
export const requestStatus = (userId) => {
    return (dispatch) => {
        API.getStatus(userId).then(data => {
            dispatch(setStatus(data))
        })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        API.updateStatus(status).then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })

    }
}
export default profileReducer