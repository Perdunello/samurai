import {API} from "../api/api";

let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET_USERS'
let SET_PAGE_NUMBER = 'SET_PAGE_NUMBER'
let SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS'
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
let TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

let initialState = {
    users: [],
    currentPageNumber: 1,
    pageCount: 5,
    totalUsersCount: 0,
    isFetching: true,
    isFollowing: []
}


let usersReducer = (state = initialState, action) => {
    if (action.type === FOLLOW) {
        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u
            })
        }
    } else if (action.type === UNFOLLOW) {
        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: false}
                }
                return u
            })
        }
    } else if (action.type === SET_USERS) {
        return {
            ...state,
            users: action.users
        }
    } else if (action.type === SET_PAGE_NUMBER) {
        return {
            ...state,
            currentPageNumber: action.pageNumber
        }
    } else if (action.type === SET_TOTAL_COUNT_USERS) {
        return {
            ...state,
            totalUsersCount: action.totalUsersCount
        }
    } else if (action.type === TOGGLE_IS_FETCHING) {
        return {
            ...state,
            isFetching: action.isFetching
        }
    } else if (action.type === TOGGLE_IS_FOLLOWING) {
        return {
            ...state,
            isFollowing: action.isFollowing
                ? [...state.isFollowing, action.userId]
                : state.isFollowing.filter(id => id !== action.userId)
        }
    } else {
        return state
    }

}

export const followSuccess = (id) => {
    return {type: FOLLOW, userId: id}
}
export const unfollowSuccess = (id) => {
    return {type: UNFOLLOW, userId: id}
}
export const setUsers = (users) => {
    return {type: SET_USERS, users: users}
}
export const setPageNumber = (pageNumber) => {
    return {type: SET_PAGE_NUMBER, pageNumber}
}
export const setTotalUsersCount = (totalUsersCount) => {
    return {type: SET_TOTAL_COUNT_USERS, totalUsersCount: totalUsersCount}
}
export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching: isFetching}
}
export const toggleIsFollowing = (isFollowing, userId) => {
    return {type: TOGGLE_IS_FOLLOWING, isFollowing, userId}
}

export const requestUsers = (currentPageNumber, pageCount) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        API.getUsers(currentPageNumber, pageCount).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(toggleIsFetching(false))
        })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId))
        API.follow(userId).then(data => {
            if (data.resultCode === 0)
                dispatch(followSuccess(userId))
            dispatch(toggleIsFollowing(false, userId))
        })
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId))
        API.unfollow(userId).then((data) => {
            if (data.resultCode === 0)
                dispatch(unfollowSuccess(userId))
            dispatch(toggleIsFollowing(false, userId))
        })
    }
}


export default usersReducer