/* eslint-disable max-len */
import './Footer.css';

const Footer = () => (
  <div id="footer">
    <div className="shopByCategory">
      <h3>Shop By Category</h3>
      <ul className="cateogiesList">
        <li>Clothes</li>
        <li>Furnature</li>
        <li>Accessories</li>
        <li>Electonics</li>
        <li>Books</li>
      </ul>
    </div>
    <div className="about">
      <h3>About</h3>
      <ul>
        <li>Contact Us</li>
        <li>About Us</li>
      </ul>
    </div>
    <div className="policy">
      <h3>Policy</h3>
      <ul>
        <li>Retrun Policy</li>
        <li>Terms of Use</li>
        <li>Security</li>
        <li>Privacy</li>
      </ul>
    </div>
    <div className="teamMembers">
      <div className="teamMembersContainer">
        <h3>Founders</h3>
        <ul>
          <li className="teamMemberDetails">
            <a href="https://github.com/hkmusameh01" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github" />
            </a>
            <p className="name">Abdalhakim Abumusameh</p>
          </li>
          <li className="teamMemberDetails">
            <a href="https://github.com/MohammedOmar123" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github" />
            </a>
            <p className="name">Sara Dahman</p>
          </li>
          <li className="teamMemberDetails">
            <a href="https://github.com/SaraDahman" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github" />
            </a>
            <p className="name">Mohammed Balousha</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
