import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import User from './User/User';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/state';

const Dialogs = (props) => {
  const users = props.state.users.map((u) => (
    <User name={u.name} id={u.id} key={u.id} />
  ));
  const messages = props.state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  const addMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  const onMessageChange = (e) => {
    const text = e.target.value;
    const action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <>
      <h1>Dialogs</h1>
      <section className={classes.dialogs}>
        <section className={classes.users}>{users}</section>
        <section className={classes.messages}>{messages}</section>
      </section>
      <div>
        <textarea
          placeholder="Enter your message text"
          onChange={onMessageChange}
          value={props.state.newMessageText}
        ></textarea>
      </div>
      <button onClick={addMessage}>Add post</button>
    </>
  );
};

export default Dialogs;
