import {isAuthMe} from "./headerReducer";

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS'

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

export const initializeApp = () => {
    return (dispatch) => {
        dispatch(isAuthMe()).then(() => {
            dispatch(setInitializedSuccess())
        })
    }
}

export default appReducer;
