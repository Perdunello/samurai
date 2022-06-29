import c from './FormsControls.module.scss'

export const Input = ({input, meta, ...props}) => {
    // в инпуте лежат данные, которые нам нужны для тега input, в мета лежат какие-то данные(например, ошибки)
    const hasError = meta.error && meta.touched
    return (
        <div>
            <div>
                <input className={hasError ? c.errorBorder : ''} {...input} {...props}/>
            </div>
            <div>
                {hasError && <span className={c.error}>{meta.error}</span>}
            </div>
        </div>
    )
}