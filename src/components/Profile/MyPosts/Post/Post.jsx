import classes from './Post.module.css';

const Post = ({ message, likesCount }) => {
  return (
    <section className={classes.post}>
      <img
        className={classes.avatar}
        src="https://avatars.githubusercontent.com/u/15583900?v=4"
        alt="Avatar"
      ></img>
      <div>
        <p>{message}</p>
        <p>Likes Count: {likesCount}</p>
      </div>
    </section>
  );
};

export default Post;
