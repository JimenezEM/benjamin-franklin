//libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faTwitter,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

//styles
import "../styles/Contact.css";

//assets
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Manténgase en contacto con nosotros.</h3>
        <p>
          Utilice los datos del contacto para matrícula del colegio o
          información de nuestras capacitaciones.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;&nbsp;&nbsp;cbenjaminfranklin@gmail.com
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />
            &nbsp;&nbsp;&nbsp;+506 2262-4245
          </li>
          <li>
            <FontAwesomeIcon icon={faLocationDot} />
            &nbsp;&nbsp;&nbsp;400 metros este del costado Norte de la iglesia
            católica <br />
            &nbsp;&nbsp;&nbsp;San Rafael de Heredia, Costa Rica
          </li>
          <li>
            <a
              href="https://www.facebook.com/cbenjaminfranklincr/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
            &nbsp;&nbsp;&nbsp;
            <a
              href="https://x.com/i/flow/login?redirect_after_login=%2Fcbenjaminfrank1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            &nbsp;&nbsp;&nbsp;
            <a
              href="https://x.com/i/flow/login?redirect_after_login=%2Fcbenjaminfrank1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form>
          <label>Nombre completo</label>
          <input type="text" name="name" placeholder="Ingrese su nombre" />
          <label>Teléfono</label>
          <input
            type="tel"
            name="phone"
            placeholder="Ingrese su número telefónico"
            required
          />
          <label>Correo electrónico</label>
          <input
            type="email"
            name="correo"
            placeholder="Ingrese su correo electrónico"
            required
          />

          <label>Mensaje</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Escriba su mensaje o consulta"
            required
          ></textarea>

          <button type="submit" className="btn dark-btn">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
