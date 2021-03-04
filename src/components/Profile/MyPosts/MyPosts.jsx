import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {

    let posts = [
      {id: 1, message: 'post 1', like: "like 1"},
      {id: 2, message: 'post 2', like: "like 2"}
    ]

    let postsElements = posts.map(p =>  <Post message={p.message} like={p.like}/>)

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
          {postsElements}
        </div>
      </div>
    )
}

export default MyPosts;