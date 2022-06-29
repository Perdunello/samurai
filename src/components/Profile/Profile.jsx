import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = props => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPosts/>
        </div>
    )
}
export default Profile;