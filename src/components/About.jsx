//libraries

//styles
import "../styles/About.css";

//assests
import aboutImg from "../assets/about.png";
import playIcon from "../assets/play_icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={aboutImg} alt="" className="about-img" />
        <img
          src={playIcon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>COLEGIO BENJAMÍN FRANKLIN</h3>
        <h2>Nuestra Institución</h2>
        <p>El Colegio Benjamín Franklin fue fundado en el año 1998.</p>
        <p>
          Actualmente se ubica en San Rafael de Heredia, pero estuvo ubicada en
          Heredia Centro, siendo una de las instituciones de mayor prestigio y
          valor de la zona.
        </p>
      </div>
    </div>
  );
};

export default About;
