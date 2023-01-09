import './navbarStyles.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <h1>
        PORT<span>FOLIO</span>
      </h1>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="hamburguer" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: 'white' }} />
        ) : (
          <FaBars size={20} style={{ color: 'white' }} />
        )}
      </div>
    </div>
  );
}

export default NavBar;
