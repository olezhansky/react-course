import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
    return (
      <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
        <div>
          <textarea></textarea>
        </div>
         <div>
          <button>Add post</button>
         </div>
         
        </div> 
        <div className={s.posts}> 
          <Post message="post 1" like="like 1"/>
          <Post message="post 2" like="like 2"/>
          <Post message="post 3" like="like 3"/>
          <Post message="post 3" like="like 4"/>
        </div>
      </div>
    )
}

export default MyPosts;