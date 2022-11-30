import classes from './Post.module.css';

const Post = ({ message }) => {
  return (
    <section className={classes.post}>
      <img
        className={classes.avatar}
        src="https://avatars.githubusercontent.com/u/15583900?v=4"
        alt="Avatar"
      ></img>
      <p>{message}</p>
    </section>
  );
};

export default Post;
