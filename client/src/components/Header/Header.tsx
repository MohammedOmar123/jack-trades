import './Header.css';
import HeaderImage from '../../assets/headerImage.png';

const Header = () => (
  <div className="div-parent">
    <img className="img" src={HeaderImage} alt="introImage" />
    <div className="div-intro">
      <h1>Exchange Your Items</h1>
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Asperiores ipsum, id illo obcaecati esse odit magnam officia
      </p>
      <Button />
    </div>

  </div>
);

export default Header;
