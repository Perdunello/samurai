import c from './Post.module.css';

const Post = (props) => {
    return (
        <div className={c.item}>
            <img src="https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg" alt="аватарка"/>
            {props.message}
            <div>
                <span>{props.likesCount} likes</span>
            </div>
        </div>
    )
}
export default Post;