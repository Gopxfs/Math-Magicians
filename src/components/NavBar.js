import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar">
    <p> Math Magicians </p>
    <ul>
      <li>
        <NavLink to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/calculator">
          Calculator
        </NavLink>
      </li>
      <li>
        <NavLink to="/quote">
          Quote
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
