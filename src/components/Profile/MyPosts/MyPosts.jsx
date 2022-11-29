import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
  return (
    <section>
      <h2>My posts</h2>
      <section>
        <textarea></textarea>
        <button>Add post</button>
      </section>
      <section className="my-posts">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </section>
    </section>
  );
}

export default MyPosts;
