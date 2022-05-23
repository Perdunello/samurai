import Navbar from "./Navbar";
import {connect} from "react-redux";
import {getBestFriends} from "../../redux/sidebarSelectors";

// let NavbarContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 return (
//                     <Navbar bestFriends={store.getState().sidebar.bestFriend}/>
//                 )
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }
let mapStatetoProps = (state) => {
    return {
        bestFriends: getBestFriends(state)
    }
}
let mapDispatchToProps = () => {
    return {}
}
let NavbarContainer = connect(mapStatetoProps, mapDispatchToProps)(Navbar)
export default NavbarContainer