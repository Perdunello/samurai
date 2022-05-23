import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    // toggleEditMode = () => {
    //     this.state.editMode
    //         ? this.setState({editMode: false})
    //         : this.setState({editMode: true})
    // }
    activate = () => {
        this.setState({editMode: true})
    }
    deactivate = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    changeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? (<div><input autoFocus={true} onBlur={this.deactivate}
                                   type="text"
                                   value={this.state.status}
                                   onChange={this.changeStatus}/></div>)
                    : (<div><span onDoubleClick={this.activate}>{this.state.status || '-------'}</span></div>)
                }
            </div>
        )
    }
}

export default ProfileStatus