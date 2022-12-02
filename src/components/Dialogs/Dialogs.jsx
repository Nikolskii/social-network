import classes from './Dialogs.module.css';
import Message from './Message/Message';
import User from './User/User';

const Dialogs = () => {
  const usersData = [
    { id: 1, name: 'Denis' },
    { id: 2, name: 'Anna' },
    { id: 3, name: 'Ivan' },
    { id: 4, name: 'Leha' },
    { id: 5, name: 'Dima' },
  ];

  const messagesData = [
    { id: 1, message: 'How are you?' },
    { id: 2, message: 'Im fine, thank you' },
    { id: 3, message: 'Good morning' },
    { id: 4, message: 'Hello!' },
  ];

  const users = usersData.map((u) => (
    <User name={u.name} id={u.id} key={u.id} />
  ));
  const messages = messagesData.map((m) => (
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
