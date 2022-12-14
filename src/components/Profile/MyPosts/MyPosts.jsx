import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer';

const MyPosts = (props) => {
  const posts = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} />
  ));

  const newPostElement = React.useRef();

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <section className={classes.myPosts}>
      <h2>My posts</h2>
      <section>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <button onClick={onAddPost}>Add post</button>
      </section>
      <section className={classes.posts}>{posts}</section>
    </section>
  );
};

export default MyPosts;
