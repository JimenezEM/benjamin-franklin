//libraries

//styles

//assets
import Hero from "./Hero";
import Title from "./Title";
import Classes from "./Classes";
import Contact from "./Contact";
import Footer from "./Footer";
import backgroundImage from "../assets/img2.png";
import Enroll from "./Enroll";

export const OfferPage = () => {
  return (
    <div>
      <Hero title="OFERTA EDUCATIVA" backgroundImage={backgroundImage} />
      <div className="container">
        <Enroll />
        <Title
          subTitle="Cursos que forman parte de nuestra maya curricular"
          title="Nuestros Cursos"
        />
        <Classes />
        <Title subTitle="Contáctenos" title="Nuestro Contacto" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};
