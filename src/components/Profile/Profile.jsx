import s from './Profile.module.css';
// import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from '../Profile/MyPosts/MyPostsContainer'
import Loader from '../Common/Loader/Loader';


const Profile = (props) => {

  if (!props.profile) {
    return <Loader />
  }

    return (
        <div className={s.content}>
          <ProfileInfo profile={props.profile}/>
          <MyPostsContainer />
      </div>
    )
}  

export default Profile;