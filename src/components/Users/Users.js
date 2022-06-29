import {useDispatch, useSelector} from "react-redux";
import {
    usersRequest,
    setPageNumber,
    followRequest, unfollowRequest,
} from "../../redux/usersReducer";
import React, {useEffect} from "react";
import c from "./Users.module.scss";
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/Images/user.png";

const Users = () => {
    const users = useSelector(state => state.usersPage.users)
    const currentPageNumber = useSelector(state => state.usersPage.currentPageNumber)
    // const totalUsersCount = useSelector(state => state.usersPage.totalUsersCount)
    const pageCount = useSelector(state => state.usersPage.pageCount)
    const isFetching = useSelector(state => state.usersPage.isFetching)
    const isFollowing = useSelector(state => state.usersPage.isFollowing)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(usersRequest({page:currentPageNumber, pageCount}))
    }, [currentPageNumber,dispatch,pageCount])

    const ShowPagination = () => {
        let pagesCount = 9
        // Math.ceil(totalUsersCount / pageCount)
        let pages = []
        for (let i = 0; i < pagesCount; i++) {
            pages.push(i + 1)
        }
        return <div>
            {pages.map(page => {
                return <span key={page}
                             className={currentPageNumber === page ? c.activePage : ""}
                             onClick={() => setActivePage(page)}>{page}</span>
            })}
        </div>
    }

    const setActivePage = (page) => {
        dispatch(setPageNumber(page))
        dispatch(usersRequest({page, pageCount}))
    }

    return (
        <div>
            {isFetching === true ? <Preloader/> : null}
            <ShowPagination/>
            {users.map((user) => {
                return <div key={user.id} className={c.usersWrapper}>
                    <div className={c.avaWrapper}>
                        <NavLink to={`/profile/${user.id}`}>
                            <img className={c.ava}
                                 src={user.photos.small != null ? user.photos.small : userPhoto}
                                 alt=""/>
                        </NavLink>
                        <div>
                            {user.followed === true
                                ? <button disabled={isFollowing.some(id => id === user.id)} onClick={() => {
                                    dispatch(unfollowRequest(user.id))
                                }}>Unfollow</button>
                                : <button disabled={isFollowing.some(id => id === user.id)} onClick={() => {
                                    dispatch(followRequest(user.id))
                                }}>Follow</button>}
                        </div>
                    </div>
                    <div className={c.infoWrapper}>
                        <div className={c.leftSide}>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div className={c.rightSide}>
                            <div>{'user.location.city'}</div>
                            <div>{'user.location.country'}</div>
                        </div>
                    </div>
                </div>
            })
            }
        </div>
    )
}
export default Users