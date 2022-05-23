import Profile from "./Profile";
import {connect} from "react-redux";
import React from "react";
import {getDataUserProfile, requestStatus, updateStatus} from "../../redux/profileReducer";
import Preloader from "../common/Preloader/Preloader";
import {Navigate, useMatch} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getProfile, getStatus} from "../../redux/profileSelectors";
import {getAuthId} from "../../redux/headerSelectors";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId
        if (!this.props.match) {
            userId = this.props.authUserId
            if (!this.props.authUserId) {
                return
                //добавить редирект на логинизацию(если мы не зарегестрированы, то редирект на логин. Если мы нажимаем на
                // Юзерс, то профиль отображается и не нужно делать логинизациюц)
            }
        } else {
            userId = this.props.match.params.userId
        }
        this.props.getDataUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        if (!this.props.authUserId && !this.props.match) {//если мы не залогинены и не смотрим чей-то профиль,
            //то переходим на страницу логинизации
            return <Navigate to='/login'/>
        }
        if (!this.props.profile) {
            return <Preloader/>
        }
        return <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        status: getStatus(state),
        authUserId: getAuthId(state)
    }
}

let mapDispatchToProps = {
    getDataUserProfile,
    updateStatus,
    getStatus: requestStatus,
}

const WithUrlDataContainer = (Component) => {
    const WithUrlData = (props) => {
        const match = useMatch('/profile/:userId/')
        return <Component {...props} match={match}/>
    }
    return WithUrlData
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithUrlDataContainer,
    // withAuthRedirect
)(ProfileContainer)
