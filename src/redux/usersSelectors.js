import {createSelector} from "reselect";

const getUsersPrimitive = (state) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersPrimitive, (users) => {
    return users.filter(u => true)
})
export const getCurrentPageNumber = (state) => {
    return state.usersPage.currentPageNumber
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getPageCount = (state) => {
    return state.usersPage.pageCount
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getIsFollowing = (state) => {
    return state.usersPage.isFollowing
}