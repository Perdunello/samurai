import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {
    getDataUserProfileRequest,
   statusRequest,
    // updateStatus
} from "../../redux/profileReducer";
import Preloader from "../common/Preloader/Preloader";
import {Navigate, useMatch} from "react-router-dom";

const ProfileContainer = () => {
    const profile = useSelector(state => state.profilePage.profile)
    const authUserId = useSelector(state => state.auth.id)
    const dispatch = useDispatch()
    const match = useMatch('/profile/:userId/')
    useEffect(() => {
        let userId
        if (!match) {
            userId = authUserId
            if (!userId) {
                return
                //добавить редирект на логинизацию(если мы не зарегестрированы, то редирект на логин. Если мы нажимаем на
                // Юзерс, то профиль отображается и не нужно делать логинизацию)
            }
        } else {
            userId = match.params.userId
        }
        dispatch(getDataUserProfileRequest(userId))
        // dispatch(requestStatus(userId))
        dispatch(statusRequest(userId))
    }, [authUserId,dispatch,match])

    if (!authUserId && !match) {//если мы не залогинены и не смотрим чей-то профиль,
        //то переходим на страницу логинизации
        return <Navigate to='/login'/>
    }
    if (!profile) {
        return <Preloader/>
    }
    return <Profile profile={profile}/>
}

export default ProfileContainer
