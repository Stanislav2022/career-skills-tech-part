import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css'

export const AppBar = () => {

  return (
        <header>
          <NavLink  to="/">
              <h2 className={css.button__header}>Home</h2>
          </NavLink>
          <NavLink to="/cards">
              <h2 className={css.button__header}>Cards</h2>
          </NavLink>
        </header>
  );
};
