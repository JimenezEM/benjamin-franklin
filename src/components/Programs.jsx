//libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//styles
import "../styles/Programs.css";

//assests
import program_1 from "../assets/math_program_image.png";
import program_2 from "../assets/law_program_image.png";
import program_3 from "../assets/lit_program_image.png";
import {
  faCalculator,
  faBook,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <FontAwesomeIcon icon={faCalculator} />
          <p>Matemáticas</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <FontAwesomeIcon icon={faBook} />
          <p>Métodos y Técnicas</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <FontAwesomeIcon icon={faChalkboardUser} />
          <p>Inglés</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
