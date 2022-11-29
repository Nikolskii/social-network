import classes from './Profile.module.css';

function Profile() {
  return (
    <section className={classes.content}>
      <img
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
      <section>
        <h2>My posts</h2>
        <h3>New post</h3>
        <section className="my-posts">
          <section>Post 1</section>
          <section>Post 1</section>
        </section>
      </section>
    </section>
  );
}

export default Profile;
