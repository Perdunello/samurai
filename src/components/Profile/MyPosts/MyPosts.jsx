import c from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import NewProfilePostForm from './NewProfilePostForm'


const MyPosts = (props) => {

    let postElements = props.profilePage.postsData
        .map((post) => <Post key={post.id + post.message} message={post.message} likesCount={post.likesCount}/>)

    let addPostOnPage = () => {
        props.addPost()
    }

    let onChangePost = (e) => {
        let text = e.target.value
        props.updateNewPostText(text)
    }

    return (
        <div className={c.postsBlock}>
            <h3>MY POSTS</h3>
            <div>
                <NewProfilePostForm onChangePost={onChangePost}
                                    newPostText={props.profilePage.newPostText}
                                    onSubmit={addPostOnPage}/>
            </div>
            <div className={c.posts}>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts;