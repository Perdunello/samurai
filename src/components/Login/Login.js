import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import LoginForm from "./LoginForm";
import React from "react";

const Login = () => {
    const isAuth = useSelector(state => state.auth.isAuth)
    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return <div>
        LOGIN
        <LoginForm/>
    </div>
}

export default Login