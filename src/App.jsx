//libraries
import { Route, Routes } from "react-router-dom";

//styles

//assets
import Navbar from "./components/Navbar";
import { MainPage } from "./components/MainPage";
import { SchoolPage } from "./components/SchoolPage";
import { OfferPage } from "./components/OfferPage";
import { GalleryPage } from "./components/GalleryPage";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/quienes-somos" element={<SchoolPage />} />
        <Route path="/oferta-educativa" element={<OfferPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
      </Routes>
    </div>
  );
};

export default App;