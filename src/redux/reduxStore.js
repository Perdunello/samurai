import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {profileWatcher} from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer, {usersWatcher} from "./usersReducer";
import headerReducer, {headerWatcher} from "./headerReducer";
import createSagaMiddleware from 'redux-saga'
import {all} from 'redux-saga/effects'
import appReducer, {appWatcher} from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: headerReducer,
    app: appReducer,
})
const sagaMiddleWare = createSagaMiddleware()
let store = createStore(reducers, applyMiddleware(sagaMiddleWare))

function* allWatchers() {
    yield all([profileWatcher(), appWatcher(), headerWatcher(), usersWatcher()])
}

sagaMiddleWare.run(allWatchers)

window.store = store
export default store