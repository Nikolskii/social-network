import classes from './Message.module.css';

const Message = ({ message }) => {
  return (
    <section className={classes.message}>
      <p>{message}</p>
    </section>
  );
};

export default Message;
