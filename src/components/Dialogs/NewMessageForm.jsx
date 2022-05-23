import React from "react";
import {Field, reduxForm} from "redux-form";
import validators from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";

const maxLength100 = validators.maxlenght(10)
const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[validators.required, maxLength100]}
                       component={Input}
                       type='text'
                       name='message'
                       onChange={props.onChangeDialogMessage}
                       value={props.newMessageText}
                       placeholder='Write message'/>
            </div>
            <div>
                <button>Enter</button>
            </div>
        </form>
    )

}

export default reduxForm({form: 'newMessage'})(NewMessageForm)