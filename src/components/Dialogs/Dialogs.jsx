import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import NewMessageForm from "./NewMessageForm";
import {reset} from "redux-form";

const Dialogs = (props) => {
    let dialogElements = props.state.dialogsData
        .map((el) => <DialogItem key={el.id + el.name} id={el.id} name={el.name} avaUrl={el.avaUrl}/>);

    let messageElements = props.state.messagesData
        .map((message) => <Message key={message.id + message.message} text={message.message}/>)

    let sendDialogMessage = () => {
        props.sendMessage()
        reset('newMessage')
    }

    let onChangeDialogMessage = (e) => {
        let textMessage = e.target.value
        props.updateNewMessageText(textMessage)
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
                                    newMessageText={props.state.newMessageText}/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;