import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import User from './User/User';

const Dialogs = (props) => {
  const state = props.dialogsPage;

  const users = state.users.map((u) => (
    <User name={u.name} id={u.id} key={u.id} />
  ));
  const messages = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  const onAddMessage = () => {
    props.onSendMessage();
  };

  const onNewMessageChange = (e) => {
    const text = e.target.value;
    props.updateNewMessageText(text);
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
          onChange={onNewMessageChange}
          value={state.newMessageText}
        ></textarea>
      </div>
      <button onClick={onAddMessage}>Add post</button>
    </>
  );
};

export default Dialogs;
