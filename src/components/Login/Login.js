import {useDispatch, useSelector} from "react-redux";
import {login, loginRequest} from "../../redux/headerReducer";
import {Navigate} from "react-router-dom";
import LoginForm from "./LoginForm";
import React from "react";

const Login = () => {
    const isAuth = useSelector(state => state.auth.id)
    const dispatch = useDispatch()
    const onSubmit = (values) => {
        dispatch(loginRequest(values.email, values.password, values.rememberMe))
    }

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return <div>
        LOGIN
        <LoginForm onSubmit={onSubmit}/>
    </div>
}

export default Login