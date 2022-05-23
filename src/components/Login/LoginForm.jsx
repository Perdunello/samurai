import {Field, reduxForm} from "redux-form";
import validators from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import c from './Login.module.css'

const maxLength30 = validators.maxlenght(30)
const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[validators.required, maxLength30]} component={Input} name={'email'}
                   placeholder={'login'} type={'text'}/>
        </div>
        <div>
            <Field validate={[validators.required, maxLength30]} component={Input} name={'password'}
                   placeholder={'password'} type={'password'}/>
        </div>
        <div>
            <Field component={Input} type={'checkbox'} name={'rememberMe'}/>remember me?
        </div>
        {props.error && <div className={c.error}>{props.error}</div>}
        <button>Login</button>
    </form>
}

export default reduxForm({form: 'login'})(LoginForm)