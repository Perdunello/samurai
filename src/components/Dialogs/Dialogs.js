import React from "react";
import {useSelector} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import c from "./Dialogs.module.scss";
import NewMessageForm from "./NewMessageForm";

const Dialogs = () => {
    const dialogsData = useSelector(state => state.dialogsPage.dialogsData)
    const messagesData = useSelector(state => state.dialogsPage.messagesData)

    const DialogElements = () => {
        return <div>
            {dialogsData
                .map((el) => <DialogItem key={el.id + el.name} id={el.id} name={el.name} avaUrl={el.avaUrl}/>)}
        </div>
    }

    const MessageElements = () => {
        return <div>
            {messagesData
                .map((message) => <Message key={message.id + message.message} text={message.message}/>)}
        </div>
    }
    return (
        <div className={c.dialogsWrapper}>
            <div className={c.leftSide_dialogs}>
                <div className={c.dialogItems}>
                    <DialogElements/>
                </div>
            </div>
            <div className={c.rightSide_dialogs}>
                <div className={c.messageItems}>
                    <MessageElements/>
                </div>
                <div>
                    <NewMessageForm/>
                </div>
            </div>
        </div>
    )
}
export default compose(withAuthRedirect)(Dialogs)