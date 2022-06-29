import c from "../Dialogs.module.scss";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={c.dialog}>
            <img src={props.avaUrl} alt=""/>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;