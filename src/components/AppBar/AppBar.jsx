import css from './AppBar.module.css';
import { NavLink } from 'react-router-dom';

export const AppBar = () => {

  return (
      <div>
        <header className={css.header}>
            <NavLink to="/">
                <h2>Home</h2>
            </NavLink>
            <NavLink to="/contacts">
                <h2>Contacts</h2>
            </NavLink>
        </header>
      </div>
  );
};
