import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ postsData }) => {
  return (
    <div className={classes.profile}>
      <ProfileInfo />
      <MyPosts postsData={postsData} />
    </div>
  );
};

export default Profile;
