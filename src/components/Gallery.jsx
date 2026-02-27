//styles
import "../styles/Gallery.css";

//assets
import program_1 from "../assets/gallery_1.png";
import program_2 from "../assets/gallery_2.png";
import program_3 from "../assets/gallery_3.png";
import program_4 from "../assets/gallery_4.png";
import program_5 from "../assets/gallery_1.png";
import program_6 from "../assets/gallery_2.png";
import program_7 from "../assets/gallery_3.png";
import program_8 from "../assets/gallery_4.png";

// Define your programs in an array
const programs = [
  { id: 1, image: program_1, title: "Foto Generación 2024" },
  { id: 2, image: program_2, title: "Foto Generación 2023" },
  { id: 3, image: program_3, title: "Foto Generación 2022" },
  { id: 4, image: program_4, title: "Foto Generación 2021" },
  { id: 5, image: program_5, title: "English Day" },
  { id: 6, image: program_6, title: "Orientación Vocacional" },
  { id: 7, image: program_7, title: "Día del Niño" },
  { id: 8, image: program_8, title: "Gira" },
];

const Gallery = () => {
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

export default Gallery;
