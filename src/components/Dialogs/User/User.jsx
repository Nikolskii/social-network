import { NavLink } from 'react-router-dom';
import classes from './User.module.css';

const User = ({ name, id }) => {
  return (
    <section class={classes.user}>
      <NavLink to={id}>{name}</NavLink>
    </section>
  );
};

export default User;
