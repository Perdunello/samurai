import c from './MyPosts.module.scss';
import Post from "./Post/Post";
import React from "react";
import NewProfilePostForm from './NewProfilePostForm'
import {useSelector} from "react-redux";


const MyPosts = () => {
    const profilePage = useSelector(state => state.profilePage)

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
                <NewProfilePostForm/>
            </div>
            <div className={c.posts}>
                <PostElements/>
            </div>
        </div>
    )
}
export default MyPosts;