import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ postsData }) => {
  // const postsData = [
  //   { id: 1, message: 'Hello, how are you?', likesCount: 5 },
  //   { id: 2, message: "It's my first post", likesCount: 0 },
  //   { id: 3, message: 'Ura ura ura', likesCount: 10 },
  // ];

  const posts = postsData.map((post) => (
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
