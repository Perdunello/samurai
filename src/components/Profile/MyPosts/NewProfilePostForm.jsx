import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import validators from "../../../utils/validators/validators";

const maxLenght10 = validators.maxlenght(10)
const NewProfilePostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[validators.required, maxLenght10]}
                       component={Input}
                       name='post'
                       onChange={props.onChangePost}
                       value={props.newPostText}
                       type={'text'}
                       placeholder='Post message'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export default reduxForm({form: 'NewProfilePost'})(NewProfilePostForm)