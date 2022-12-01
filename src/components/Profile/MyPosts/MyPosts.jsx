import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <section className={classes.myPosts}>
      <h2>My posts</h2>
      <section>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </section>
      <section className={classes.posts}>
        <Post message="Hello, how are you?" />
        <Post message="Its my first post" />
        <Post message="Ura ura ura" />
      </section>
    </section>
  );
};

export default MyPosts;
