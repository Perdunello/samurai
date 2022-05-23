import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {isAuthMe, logout, setAuthUserData} from "../../redux/headerReducer";
import {getIsAuth, getLogin} from "../../redux/headerSelectors";

class HeaderContainer extends React.Component {
    // componentDidMount() {
    //     this.props.isAuthMe()
    // }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        login: getLogin(state),
        isAuth: getIsAuth(state),
    }
}

let mapDispatchToProps = {setAuthUserData, isAuthMe,logout}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)