import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ state, addPost, updateNewPostText }) => {
  const posts = state.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} />
  ));

  const newPostElement = React.useRef();

  const addPostHandler = () => {
    addPost();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    updateNewPostText(text);
  };

  return (
    <section className={classes.myPosts}>
      <h2>My posts</h2>
      <section>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={state.newPostText}
          />
        </div>
        <button onClick={addPostHandler}>Add post</button>
      </section>
      <section className={classes.posts}>{posts}</section>
    </section>
  );
};

export default MyPosts;
