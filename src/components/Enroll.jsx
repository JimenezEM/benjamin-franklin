//libraries

//styles
import "../styles/About.css";

//assests
import aboutImg from "../assets/about.png";

const Enroll = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={aboutImg} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>COLEGIO BENJAMÍN FRANKLIN</h3>
        <h2>Matrícula</h2>
        <p>
          Horario: Lunes a Jueves de 7:30 a.m. a 3:00 p.m. Viernes 7:30 a.m. a
          12:00 m.d.
        </p>
        <p>
          Uniforme: Camisa tipo polo color beige (se vende en el colegio).
          Pantalón (tela: sincatex, verde olivo, se puede comprar en la Tienda
          Elías a un costado del Mercado). Zapatos totalmente café. Medias beige
          o verde musgo. Uniforme de educación Física (se vende en colegio:
          camiseta blanca y pantaloneta negra con el escudo de la Institución).
        </p>
        <p>
          El cupo es limitado (25 alumnos). Se da atención individual y constante
          comunicación con el hogar.
        </p>
      </div>
    </div>
  );
};

export default Enroll;
