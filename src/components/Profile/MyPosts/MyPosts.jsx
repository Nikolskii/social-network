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

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    const action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
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
        <button onClick={addPost}>Add post</button>
      </section>
      <section className={classes.posts}>{posts}</section>
    </section>
  );
};

export default MyPosts;
