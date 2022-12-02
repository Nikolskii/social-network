import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  const postsData = [
    { id: 1, message: 'Hello, how are you?', likesCount: 5 },
    { id: 2, message: "It's my first post", likesCount: 0 },
    { id: 3, message: 'Ura ura ura', likesCount: 10 },
  ];

  return (
    <div className={classes.profile}>
      <ProfileInfo />
      <MyPosts postsData={postsData} />
    </div>
  );
};

export default Profile;
