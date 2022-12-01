import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__links}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.nav__link_active : classes.nav__link
            }
            to="profile"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.nav__link_active : classes.nav__link
            }
            to="dialogs"
          >
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.nav__link_active : classes.nav__link
            }
            to="news"
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.nav__link_active : classes.nav__link
            }
            to="music"
          >
            Music
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.nav__link_active : classes.nav__link
            }
            to="settings"
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
