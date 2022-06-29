import React from "react";
import {sendMessage, updateNewMessageText} from "../../redux/dialogsReducer";
import {useDispatch, useSelector} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {reset} from "redux-form";
import c from "./Dialogs.module.scss";
import NewMessageForm from "./NewMessageForm";

const Dialogs = () => {
    const state = useSelector(state => state.dialogsPage)
    const dispatch = useDispatch()

    let dialogElements = state.dialogsData
        .map((el) => <DialogItem key={el.id + el.name} id={el.id} name={el.name} avaUrl={el.avaUrl}/>);

    let messageElements = state.messagesData
        .map((message) => <Message key={message.id + message.message} text={message.message}/>)

    let sendDialogMessage = () => {
        dispatch(sendMessage())
        reset('newMessage')
    }

    let onChangeDialogMessage = (e) => {
        let textMessage = e.target.value
        dispatch(updateNewMessageText(textMessage))
    }
    return (
        <div className={c.dialogsWrapper}>
            <div className={c.leftSide_dialogs}>
                <div className={c.dialogItems}>
                    {dialogElements}
                </div>
            </div>
            <div className={c.rightSide_dialogs}>
                <div className={c.messageItems}>
                    {messageElements}
                </div>
                <div>
                    <NewMessageForm onSubmit={sendDialogMessage}
                                    onChangeDialogMessage={onChangeDialogMessage}
                                    newMessageText={state.newMessageText}/>
                </div>
            </div>
        </div>
    )
}
export default compose(withAuthRedirect)(Dialogs)