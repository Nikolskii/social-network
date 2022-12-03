import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ state }) => {
  const posts = state.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} />
  ));

  return (
    <section className={classes.myPosts}>
      <h2>My posts</h2>
      <section>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </section>
      <section className={classes.posts}>{posts}</section>
    </section>
  );
};

export default MyPosts;
