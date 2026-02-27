//libraries
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//styles
import "../styles/Campus.css";

//assests
import gallery_1 from "../assets/gallery_1.png";
import gallery_2 from "../assets/gallery_2.png";
import gallery_3 from "../assets/gallery_3.png";
import gallery_4 from "../assets/gallery_4.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className="btn dark-btn">
        <Link to="/galeria">
          Ver más&nbsp;&nbsp;
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </button>
    </div>
  );
};

export default Campus;
