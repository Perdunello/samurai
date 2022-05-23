import React from "react";
import {sendMessage, updateNewMessageText} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getDialogPage} from "../../redux/dialogsSelectors";

// const DialogsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>{
//             store => {
//                 let sendDialogMessage = () => {
//                     store.dispatch(sendMessageCreator())
//                 }
//
//                 let onChangeDialogMessage = (textMessage) => {
//                     store.dispatch(updateNewMessageTextCreator(textMessage))
//                 }
//                 return (
//                     <Dialogs sendMessage={sendDialogMessage}
//                              updateNewMessageText={onChangeDialogMessage}
//                              state={store.getState().dialogsPage}/>
//                 )
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        state: getDialogPage(state),
    }
}
let mapDispatchToProps = {
    sendMessage, updateNewMessageText
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
// let DialogsAuthRedirect = withAuthRedirect(Dialogs)
// export default connect(mapStateToProps, mapDispatchToProps)(DialogsAuthRedirect)