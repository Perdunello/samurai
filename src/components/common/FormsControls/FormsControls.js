import c from './FormsControls.module.css'

export const Input = ({input, meta, ...props}) => {
    //деструктуризация нужна потому что в пропсы могут прийти разные аттрибуты и для того,
    // чтобы в тег не передавать все аттрибуты, мы деструктуризируем и засовываем все что есть в нужный нам тег
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