import React from 'react';
import MyPosts from './MyPosts';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  const onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    const action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={onAddPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
