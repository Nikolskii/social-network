import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ state, addPost, updateNewPostText }) => {
  return (
    <div className={classes.profile}>
      <ProfileInfo />
      <MyPosts
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </div>
  );
};

export default Profile;
