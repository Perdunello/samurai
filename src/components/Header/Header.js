import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {logoutRequest} from "../../redux/headerReducer";
import c from "./Header.module.scss";
import {NavLink} from "react-router-dom";

const Header = () => {
    const login = useSelector(state => state.auth.login)
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()

    return (
        <header className={c.header}>
            <img src="https://w7.pngwing.com/pngs/786/126/png-transparent-logo-contracting-photography-logo-symbol.png"
                 alt=""/>
            <div className={c.auth}>
                {isAuth
                    ? (<div>
                        <div>{login}</div>
                        <button onClick={() => dispatch(logoutRequest())}>Logout</button>
                    </div>)
                    : <NavLink to='/login'>LOGIN</NavLink>}
            </div>
        </header>
    )
}
export default Header