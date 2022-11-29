import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

function Profile() {
  return (
    <section className={classes.content}>
      <img
        className={classes.profileBanner}
        src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg"
        alt="banner"
      />
      <section>
        <img
          src="https://avatars.githubusercontent.com/u/15583900?v=4"
          alt="avatar"
        />
        <section>
          <h2>Nikolsky Denis</h2>
          <p>Date of Birth: 5 april</p>
        </section>
      </section>
      <MyPosts />
    </section>
  );
}

export default Profile;