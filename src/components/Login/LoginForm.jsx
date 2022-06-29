// import c from './Login.module.scss'
import {useForm} from 'react-hook-form'
import {useDispatch} from "react-redux";
import {loginRequest} from "../../redux/headerReducer";

const LoginForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onChange'});
    const dispatch = useDispatch()
    const onSubmit = (values) => {
        dispatch(loginRequest(values))
    }
    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input placeholder={'login'} type="text" {...register('email', {
                    required: 'Field name is required',
                    minLength: {value: 5, message: ' Minimal length is 5 symbols'}
                })}/>
                <div>{errors.email && errors.email.message}</div>
            </div>
            <div>
                <input placeholder={'password'} type="password" {...register('password', {
                    required: 'Field password is required',
                    maxLength: {value: 40, message: 'Maximal length is 40 symbols'}
                })}/>
                <div>{errors.password && errors.password.message}</div>
            </div>
            <div>
                <input type="checkbox" {...register('rememberMe')}/> Remember me?
            </div>
            <input type="submit"/>
        </form>
    </div>
}
export default LoginForm