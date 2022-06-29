import React, {useEffect, useState} from "react";
import {updateStatusRequest} from "../../../redux/profileReducer";
import {useDispatch} from "react-redux";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    const dispatch = useDispatch()

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activate = () => {
        setEditMode(true)
    }
    const deactivate = () => {
        setEditMode(false)
        dispatch(updateStatusRequest(status))
    }

    const changeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {editMode
                ? (<div><input autoFocus={true} onBlur={deactivate}
                               type="text"
                               value={status}
                               onChange={changeStatus}/></div>)
                : (<div><span onDoubleClick={activate}>{props.status || '-------'}</span></div>)
            }
        </div>
    )

}
export default ProfileStatus