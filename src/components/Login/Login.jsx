import React from 'react'
import LoginForm from "./LoginForm";
import {Navigate} from "react-router-dom";

class Login extends React.Component {
    onSubmit = (values) => {
        this.props.login(values.email,values.password,values.rememberMe)
    }

    render() {
        if(this.props.isAuth){
            return <Navigate to={'/profile'}/>
        }
        return <div>
            LOGIN
            <LoginForm onSubmit={this.onSubmit}/>
        </div>
    }
}

export default Login