import React from 'react';
import { Link } from 'react-router-dom';
import css from './navbar.module.scss'; // Adjust the path as per your project structure

const Navbar = () => {
  return (
    <nav className={css.navbar}>
      <div className={css.brand}>
        <Link to="/" className={css.brandLink}>
          Your Website Name
        </Link>
      </div>
      <ul className={css.navLinks}>
        <li><Link to="/" className={css.navLink}>Home</Link></li>
        <li><Link to="/about" className={css.navLink}>About</Link></li>
        {/* Add more navigation links here as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
