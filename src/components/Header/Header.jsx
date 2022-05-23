import c from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={c.header}>
            <img src="https://w7.pngwing.com/pngs/786/126/png-transparent-logo-contracting-photography-logo-symbol.png"
                 alt=""/>
            <div className={c.auth}>
                {props.isAuth
                    ? (<div>
                        <div>{props.login}</div>
                        <button onClick={props.logout}>Logout</button>
                    </div>)
                    : <NavLink to='/login'>LOGIN</NavLink>}
            </div>
        </header>
    )
}
export default Header;