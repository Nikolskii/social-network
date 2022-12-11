import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import User from './User/User';

const Dialogs = (props) => {
  const users = props.state.users.map((u) => (
    <User name={u.name} id={u.id} key={u.id} />
  ));
  const messages = props.state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  const newMessageElement = React.useRef();

  const addMessage = () => {
    const text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <>
      <h1>Dialogs</h1>
      <section className={classes.dialogs}>
        <section className={classes.users}>{users}</section>
        <section className={classes.messages}>{messages}</section>
      </section>
      <div>
        <textarea ref={newMessageElement}></textarea>
      </div>
      <button onClick={addMessage}>Add post</button>
    </>
  );
};

export default Dialogs;
