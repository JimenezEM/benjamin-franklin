//libraries

//styles

//assets
import Hero from "./Hero";
import Title from "./Title";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";
import backgroundImage from "../assets/img3.png";

export const GalleryPage = () => {
  return (
    <div>
      <Hero title="GALERÍA" backgroundImage={backgroundImage} />
      <div className="container">
        <Title
          subTitle="Galería del Colegio Benjamín Franklin"
          title="Nuestra Galería"
        />
        <Gallery />
        <Title subTitle="Contáctenos" title="Nuestro Contacto" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};
