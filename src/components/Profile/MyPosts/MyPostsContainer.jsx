import React from "react";
import {addPost, updateNewPostText} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = {
    updateNewPostText,
    addPost,
}
export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)