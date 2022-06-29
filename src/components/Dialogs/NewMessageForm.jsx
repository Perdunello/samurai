import React from "react";
import {useForm} from "react-hook-form";
import {sendMessage, updateNewMessageText} from "../../redux/dialogsReducer";
import {useDispatch, useSelector} from "react-redux";

const NewMessageForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onChange'});
    const newMessageText = useSelector(state => state.dialogsPage.newMessageText)
    const dispatch = useDispatch()

    let onChangeDialogMessage = (e) => {
        let textMessage = e.target.value
        dispatch(updateNewMessageText(textMessage))
    }
    const sendDialogMessage = () => {
        dispatch(sendMessage())
    }
    return (
        <form onSubmit={handleSubmit(sendDialogMessage)}>
            <div>
                <input type="text" placeholder='Write message' {...register('message', {
                    required: 'This field is required',
                    maxLength: {
                        value: 100,
                        message: `Max length of message is 100`
                    }
                })} onChange={onChangeDialogMessage} value={newMessageText}/>
                <div>{errors.message && errors.message.message}</div>
            </div>
            <div>
                <button>Enter</button>
            </div>
        </form>
    )
}
export default NewMessageForm