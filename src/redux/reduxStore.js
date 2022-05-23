import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import headerReducer from "./headerReducer";
import thunkMiddleWare from 'redux-thunk'
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: headerReducer,
    form: formReducer,
    app:appReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))
window.store = store
export default store