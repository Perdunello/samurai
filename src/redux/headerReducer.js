import {API} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

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

export const isAuthMe = () => {
    return (dispatch) => {
        return API.isAuthMe().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data.id, data.data.login, data.data.email))
            }
        })
    }
}

export const login = (email, password, rememberMe = false) => {
    return (dispatch) => {
        API.login(email, password, rememberMe).then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(isAuthMe())
            } else {
                dispatch(stopSubmit('login', {_error: responce.data.messages}))
            }
        })
    }
}
export const logout = () => {
    return (dispatch) => {
        API.logout().then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}
export default headerReducer;