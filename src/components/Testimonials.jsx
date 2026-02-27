//libraries
import { useRef } from "react";

//styles
import "../styles/Testimonials.css";

//assets
import next_icon from "../assets/next_icon.png";
import back_icon from "../assets/back_icon.png";
import user_1 from "../assets/user-1.png";
import user_2 from "../assets/user-2.png";
import user_3 from "../assets/user-3.png";
import user_4 from "../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Madre de familia</h3>
                  <span>2011</span>
                </div>
              </div>
              <p>
                Tenemos 4 años siendo parte de esta gran familia Benjamin
                Franklin, si! Familia! Porque eso es esta institución, en donde
                desde el primer momento en que llegamos a la entrevista nos han
                hecho sentir muy a gusto y con la confianza de que la educación
                académica de nuestro hijo, esta en muy buenas manos. Con el paso
                de los años he podido constatar como mi hijo avanza no solamente
                académicamente, sino también con su auto estima y confianza en
                sus clases, donde puede opinar y preguntar sabiendo que la
                respuesta siempre será positiva, lo que hace que se sienta
                cómodamente en las clases.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Padre de familia</h3>
                  <span>2023</span>
                </div>
              </div>
              <p>
                Nuestra experiencia desde que llegamos al colegio y luego de una
                cálida bienvenida, ha sido el amoldamiento mutuo a las
                necesidades de nuestro hijo, siendo el objetivo de ambas partes,
                excelencia académica y convirtiéndose en un apoyo en las
                necesidades emocionales que requiere un adolescente, brindando
                mano fuerte pero sensible a cada momento, creando un ambiente de
                camaradería entre el personal docente, administrativo y los
                estudiantes.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Madre de familia</h3>
                  <span>2012</span>
                </div>
              </div>
              <p>
                Es el último año de mi hija y en esta institución siempre me
                apoyaron y la apoyaron a ella. Son muy buenas personas, de gran
                carisma y una personalidad excelente. Es un buen colegio y yo lo
                recomendaría gracias por el apoyo.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Padre de familia</h3>
                  <span>2022</span>
                </div>
              </div>
              <p>
                Mi hijo está en este Colegio desde el año 2016 cuando ingresó a
                sétimo año. Siempre hemos recibido muy buena atención por parte
                del personal, profesores, administrativos y de la misma señora
                directora. Cuando se ha suscitado algún inconveniente la
                comunicación ha sido de lo mejor!! Estamos muy agradecidos y
                contentos de pertenecer a esta institución.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
