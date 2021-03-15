import s from './Post.module.css'
const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/31/51/ff/3151ff86e04d3d4e38ac9bf990ca6d1e.png" alt=""/>
            <p>{props.message}</p>
            <p>{props.likesCount}</p>
        </div>
    )
}

export default Post;

