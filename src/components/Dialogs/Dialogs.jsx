import classes from './Dialogs.module.css';
import Message from './Message/Message';
import User from './User/User';

const Dialogs = () => {
  return (
    <>
      <h1>Dialogs</h1>
      <section className={classes.dialogs}>
        <section className={classes.users}>
          <User name="Denis" id="1" />
          <User name="Anna" id="2" />
          <User name="Ivan" id="3" />
          <User name="Leha" id="4" />
          <User name="Dima" id="5" />
        </section>
        <section className={classes.messages}>
          <Message message="How are you?" />
          <Message message="I'm fine, thank you" />
          <Message message="Good morning" />
        </section>
      </section>
    </>
  );
};

export default Dialogs;
