import classes from './Dialogs.module.css';
import Message from './Message/Message';
import User from './User/User';

const Dialogs = ({ state }) => {
  const users = state.users.map((u) => (
    <User name={u.name} id={u.id} key={u.id} />
  ));
  const messages = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  return (
    <>
      <h1>Dialogs</h1>
      <section className={classes.dialogs}>
        <section className={classes.users}>{users}</section>
        <section className={classes.messages}>{messages}</section>
      </section>
    </>
  );
};

export default Dialogs;
