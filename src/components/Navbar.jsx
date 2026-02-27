//libraries
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

//styles
import "../styles/Navbar.css";

//assets
import logo from "../assets/logo_image.png";
import menuIcon from "../assets/menu_icon_image.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setSticky(window.scrollY > 50);
    });

    return () => {
      window.removeEventListener("scroll", () => {}); // Clean up event listener
    };
  }, []);

  const toggleMenu = () => setMobileMenu(!mobileMenu);
  const closeMenu = () => setMobileMenu(false); // Close menu when clicking a link

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <Link to="/" onClick={closeMenu}>
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="/" onClick={closeMenu}>INICIO</Link>
        </li>
        <li>
          <Link to="/quienes-somos" onClick={closeMenu}>QUIÉNES SOMOS</Link>
        </li>
        <li>
          <Link to="/oferta-educativa" onClick={closeMenu}>OFERTA EDUCATIVA</Link>
        </li>
        <li>
          <Link to="/galeria" onClick={closeMenu}>GALERÍA</Link>
        </li>
        <li>
          <button className="btn">
            <ScrollLink to="contact" smooth={true} offset={-260} duration={2000} onClick={closeMenu}>
              CONTACTO
            </ScrollLink>
          </button>
        </li>
      </ul>
      <img src={menuIcon} alt="Menu Icon" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
