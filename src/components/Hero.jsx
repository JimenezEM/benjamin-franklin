//libraries
import { Link as ScrollLink } from "react-scroll";

//styles
import "../styles/Hero.css";

//assests

const Hero = ({ title, backgroundImage }) => {
  return (
    <div
      className="hero container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`,
      }}
    >
      <div className="hero-text">
        <h1>{title}</h1>
        <button className="btn-border">
          <ScrollLink to="contact" smooth={true} offset={-260} duration={2000}>
            Contáctenos
          </ScrollLink>
        </button>
      </div>
    </div>
  );
};

export default Hero;
