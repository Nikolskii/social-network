import { Outlet } from 'react-router-dom';
import classes from './Content.module.css';

const Content = () => {
  return (
    <section className={classes.content}>
      <Outlet />
    </section>
  );
};

export default Content;
