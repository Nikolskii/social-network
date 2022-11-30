import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__links}>
        <li>
          <a className={classes.nav__link} href="/profile">
            Profile
          </a>
        </li>
        <li>
          <a className={classes.nav__link} href="/dialogs">
            Messages
          </a>
        </li>
        <li>
          <a className={classes.nav__link} href="/news">
            News
          </a>
        </li>
        <li>
          <a className={classes.nav__link} href="/music">
            Music
          </a>
        </li>
        <li>
          <a className={classes.nav__link} href="/settings">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
