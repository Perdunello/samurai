import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import c from "./Navbar.module.css";

let Navbar = () => {
    const bestFriends = useSelector(state => state.sidebar.bestFriend)
    let bestFriendList = bestFriends
        .map(friend => (
                <NavLink key={friend.name + friend.id} to={'/dialogs/' + friend.id}> <img className={c.avaImage}
                                                                                          src={friend.avaUrl}
                                                                                          alt=""/></NavLink>
            )
        )
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to='/profile'
                         className={checkActive => checkActive.isActive ? c.active : c.item}>Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/dialogs'
                         className={checkActive => checkActive.isActive ? c.active : c.item}>Dialogs</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/users'
                         className={checkActive => checkActive.isActive ? c.active : c.item}>Users</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/news' className={checkActive => checkActive.isActive ? c.active : c.item}>News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/music' className={checkActive => checkActive.isActive ? c.active : c.item}>Music</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/settings'
                         className={checkActive => checkActive.isActive ? c.active : c.item}>Settings</NavLink>
            </div>
            <div>
                <h4>FRIENDS</h4>
                <div className={c.bestFriend_wrapper}>{bestFriendList}</div>
            </div>
        </nav>
    )
}
export default Navbar