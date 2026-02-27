//libraries

//styles

//assets
import Hero from "./Hero";
import Contact from "./Contact";
import Title from "./Title";
import Footer from "./Footer";
import backgroundImage from "../assets/img2.png";

export const SchoolPage = () => {
  return (
    <div>
      <Hero title="QUIÉNES SOMOS" backgroundImage={backgroundImage} />
      <div className="container">
        <Title subTitle="Contáctenos" title="Nuestro Contacto" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};
