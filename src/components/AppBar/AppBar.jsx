import css from './AppBar.module.css';
import { NavLink } from 'react-router-dom';

export const AppBar = () => {

  return (
      <div>
        <header className={css.header}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cards">Cards</NavLink>
        </header>
      </div>
  );
};
