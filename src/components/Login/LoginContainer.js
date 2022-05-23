import Login from "./Login";
import {connect} from "react-redux";
import {login} from "../../redux/headerReducer";
import {getIsAuth} from "../../redux/headerSelectors";

const LoginContainer = (props) => {
    return <Login {...props}/>
}
let mapStateToProps = (state) => {
    return {isAuth: getIsAuth(state)}
}
let mapDispatchToProps = {login}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)