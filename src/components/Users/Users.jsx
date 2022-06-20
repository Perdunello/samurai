import c from './Users.module.css'
import userPhoto from '../../assets/Images/user.png'
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let a = String('awdawd')
    console.log(a)
    return <div>
        {props.isFetching === true ? <Preloader/> : null}
        {props.showPagination()}
        {props.users.map((user) => {
            return <div key={user.id} className={c.usersWrapper}>
                <div className={c.avaWrapper}>
                    <NavLink to={`/profile/${user.id}`}>
                        <img className={c.ava}
                             src={user.photos.small != null ? user.photos.small : userPhoto}
                             alt=""/>
                    </NavLink>
                    <div>
                        {user.followed === true
                            ? <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => {
                                props.unfollow(user.id)
                            }}>Unfollow</button>
                            : <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => {
                                props.follow(user.id)
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
}

export default Users;