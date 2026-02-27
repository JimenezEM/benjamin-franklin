//styles
import "../styles/Gallery.css";

//assets
import program_1 from "../assets/law_program_image.png";
import program_2 from "../assets/science_program_image.png";
import program_3 from "../assets/math_program_image.png";
import program_4 from "../assets/lit_program_image.png";
import program_5 from "../assets/law_program_image.png";
import program_6 from "../assets/science_program_image.png";
import program_7 from "../assets/math_program_image.png";
import program_8 from "../assets/lit_program_image.png";

// Define your programs in an array
const programs = [
  { id: 1, image: program_1, title: "Español" },
  { id: 2, image: program_2, title: "Francés" },
  { id: 3, image: program_3, title: "Ciencias, Cursos de Robótica" },
  { id: 4, image: program_4, title: "Métodos y Técnicas" },
  { id: 5, image: program_5, title: "Matemáticas" },
  { id: 6, image: program_6, title: "Educación Física" },
  { id: 7, image: program_7, title: "Orientación Vocacional" },
  { id: 8, image: program_8, title: "Ética Moral" },
];

const Classes = () => {
  return (
    <div className="programs">
      {programs.map((program) => (
        <div className="program" key={program.id}>
          <img src={program.image} alt={program.title} />
          <div className="caption">
            <p>{program.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
