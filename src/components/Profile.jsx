function Profile() {
  return (
    <section className="content">
      <img
        src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg"
        alt="banner"
      />
      <section className="user">
        <img
          className="user__avatar"
          src="https://avatars.githubusercontent.com/u/15583900?v=4"
          alt="avatar"
        />
        <section className="user__info">
          <h2>Nikolsky Denis</h2>
          <p>Date of Birth: 5 april</p>
        </section>
      </section>
      <section className="posts">
        <h2>My posts</h2>
        <h3>New post</h3>
        <section className="my-posts">
          <section className="post">Post 1</section>
          <section className="post">Post 1</section>
        </section>
      </section>
    </section>
  );
}

export default Profile;
