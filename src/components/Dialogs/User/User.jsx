import { NavLink } from 'react-router-dom';
import classes from './User.module.css';

const User = ({ name, id }) => {
  return (
    <section className={classes.user}>
      <NavLink to={String(id)}>{name}</NavLink>
    </section>
  );
};

export default User;
