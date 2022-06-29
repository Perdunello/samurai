import c from "../Dialogs.module.scss";

const Message = (props) => {
    return (
        <div className={c.message}>{props.text}</div>
    )
}
export default Message;