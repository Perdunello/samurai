import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activate = () => {
        setEditMode(true)
    }
    const deactivate = () => {
        setEditMode(false)
        props.updateStatus(status)
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
// class ProfileStatus extends React.Component {
//     state = {
//         editMode: false,
//         status: this.props.status,
//     }
//     activate = () => {
//         this.setState({editMode: true})
//     }
//     deactivate = () => {
//         this.setState({editMode: false})
//         this.props.updateStatus(this.state.status)
//
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             })
//         }
//     }
//
//     changeStatus = (e) => {
//         this.setState({
//             status: e.currentTarget.value,
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 {this.state.editMode
//                     ? (<div><input autoFocus={true} onBlur={this.deactivate}
//                                    type="text"
//                                    value={this.state.status}
//                                    onChange={this.changeStatus}/></div>)
//                     : (<div><span onDoubleClick={this.activate}>{this.state.status || '-------'}</span></div>)
//                 }
//             </div>
//         )
//     }
// }

export default ProfileStatus