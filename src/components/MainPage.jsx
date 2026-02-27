//libraries
import { useState } from "react";

//styles

//assets
import Hero from "./Hero";
import Programs from "./Programs";
import Title from "./Title";
import About from "./About";
import Campus from "./Campus";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import VideoPlayer from "./VideoPlayer";
import backgroundImage from "../assets/img1.png";

export const MainPage = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Hero
        title="COLEGIO BENJAMÍN FRANKLIN"
        backgroundImage={backgroundImage}
      />
      <div className="container">
        <Title
          subTitle="Cursos que forman parte de nuestra maya curricular"
          title="Nuestros Cursos"
        />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title
          subTitle="Galería del Colegio Benjamín Franklin"
          title="Nuestra Galería"
        />
        <Campus />
        <Title
          subTitle="Testimonios de padres felices y orgullos de formar parte de esta institución"
          title="Testimonios"
        />
        <Testimonials />
        <Title subTitle="Contáctenos" title="Nuestro Contacto" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};
