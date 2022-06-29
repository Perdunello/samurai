import React, {useEffect} from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/Dialogs";
import Navbar from "./components/Navbar/Navbar";
import Users from "./components/Users/Users";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {initialAppRequest} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";


const App = () => {
    const initialized = useSelector(state => state.app.initialized)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initialAppRequest())
        // props.initializeApp()
    })

    if (!initialized) {
        return <Preloader/>
    }
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile/*' element={<ProfileContainer/>}/>
                    <Route path='/dialogs' element={<DialogsContainer/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/users' element={<Users/>}/>
                    <Route path='*' element={<div style={{color: 'red', fontWeight: 'bold'}}>NOT FOUND PAGE</div>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </div>
        </div>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         initialized: state.app.initialized
//     }
// }
// const mapDispatchToProps = {
//     // initializeApp
// }

export default // connect(mapStateToProps, mapDispatchToProps)(
App
// );
