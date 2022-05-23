export const getUsers =(state)=>{
    return state.usersPage.users
}
export const getCurrentPageNumber =(state)=>{
    return state.usersPage.currentPageNumber
}
export const getTotalUsersCount =(state)=>{
    return state.usersPage.totalUsersCount
}
export const getPageCount =(state)=>{
    return state.usersPage.pageCount
}
export const getIsFetching =(state)=>{
    return state.usersPage.isFetching
}
export const getIsFollowing =(state)=>{
    return state.usersPage.isFollowing
}