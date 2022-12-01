import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <section className={classes.profileInfo}>
      <img
        className={classes.profileBanner}
        src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg"
        alt="banner"
      />
      <img
        className={classes.avatar}
        src="https://avatars.githubusercontent.com/u/15583900?v=4"
        alt="avatar"
      />
      <section className={classes.info}>
        <h2>Nikolsky Denis</h2>
        <p>Date of Birth: 5 april</p>
      </section>
    </section>
  );
};

export default ProfileInfo;
