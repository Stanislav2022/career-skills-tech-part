import { NavLink } from 'react-router-dom';

export const AppBar = () => {

  return (
        <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cards">Cards</NavLink>
        </header>
  );
};
