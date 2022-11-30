import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__links}>
        <li>
          <Link className={classes.nav__link} to="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className={classes.nav__link} to="/dialogs">
            Messages
          </Link>
        </li>
        <li>
          <Link className={classes.nav__link} to="/news">
            News
          </Link>
        </li>
        <li>
          <Link className={classes.nav__link} to="/music">
            Music
          </Link>
        </li>
        <li>
          <Link className={classes.nav__link} to="/settings">
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
