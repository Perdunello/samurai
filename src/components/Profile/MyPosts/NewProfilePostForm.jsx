import React from "react";
import {useForm} from "react-hook-form";
import {addPost, updateNewPostText} from "../../../redux/profileReducer";
import {useDispatch, useSelector} from "react-redux";

const NewProfilePostForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const newPostText = useSelector(state => state.profilePage.newPostText)
    const dispatch = useDispatch()
    let onChangePost = (e) => {
        let text = e.target.value
        dispatch(updateNewPostText(text))
    }
    let addPostOnPage = () => {
        dispatch(addPost())
    }
    return (
        <form onSubmit={handleSubmit(addPostOnPage)}>
            <div>
                <input type="text"
                       placeholder='Post message' {...register('post', {required: 'This field is required'})}
                       onChange={onChangePost}
                       value={newPostText}/>
                <div>{errors.post && errors.post.message}</div>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export default NewProfilePostForm