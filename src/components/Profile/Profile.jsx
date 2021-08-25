import s from './Profile.module.css';
// import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from '../Profile/MyPosts/MyPostsContainer'
import Loader from '../Common/Loader/Loader';


const Profile = (props) => {
  console.log(props)

  if (!props.profile) {
    return <Loader />
  }
  return (
      <div className={s.content}>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer />
    </div>
  )
}  

export default Profile;