import { FC } from 'react';
import './Navbar.css';

const Navbar: FC = () => (
  <nav className="navbar">
    <h2>Jack Trades</h2>
    <ul>
      <li><a href="/home">Home</a></li>
      <li>
        <a href="/about">About us</a>
      </li>
      <li>
        <a href="/contact">Contact us</a>
      </li>
      <li><a href="/browse">Browse</a></li>
    </ul>
    { /* eslint-disable-next-line react/button-has-type */}
    <button className="join-btn">Join Us</button>
  </nav>
);

export default Navbar;
