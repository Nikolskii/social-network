import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ state, addPost }) => {
  return (
    <div className={classes.profile}>
      <ProfileInfo />
      <MyPosts state={state} addPost={addPost} />
    </div>
  );
};

export default Profile;
