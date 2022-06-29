import c from './MyPosts.module.scss';
import Post from "./Post/Post";
import React from "react";
import NewProfilePostForm from './NewProfilePostForm'
import {useDispatch, useSelector} from "react-redux";
import {addPost, updateNewPostText} from "../../../redux/profileReducer";


const MyPosts = () => {
    const profilePage = useSelector(state => state.profilePage)
    const dispatch = useDispatch()

    let addPostOnPage = () => {
        dispatch(addPost())
    }

    let onChangePost = (e) => {
        let text = e.target.value
        dispatch(updateNewPostText(text))
    }

    const PostElements = () => {
        return <div>
            {profilePage.postsData
                .map((post) => <Post key={post.id + post.message} message={post.message}
                                     likesCount={post.likesCount}/>)}
        </div>
    }

    return (
        <div className={c.postsBlock}>
            <h3>MY POSTS</h3>
            <div>
                <NewProfilePostForm onChangePost={onChangePost}
                                    newPostText={profilePage.newPostText}
                                    onSubmit={addPostOnPage}/>
            </div>
            <div className={c.posts}>
                <PostElements/>
            </div>
        </div>
    )
}
export default MyPosts;