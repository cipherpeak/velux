import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./components/layout/Layout";
import FilmWrapping from "./Pages/Services/FilmWrapping";
import CoatingPage from "./Pages/Services/CoatingPage/CoatingPage";
import Contact from "./Pages/Contact/Contact";
import Franchise from "./Pages/Franchise/Franchise";
import Packages from "./Pages/Packages/Packages";
import WindowTinting from "./Pages/Services/WindowTinting.tsx/WindowTinting";
import ExteriorDetailing from "./Pages/ExteriorDetailing/ExteriorDetailing";
import InteriorDetailing from "./Pages/InteriorDetailing/InteriorDetailing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/film-wrapping" element={<FilmWrapping />} />
            <Route path="/coatings" element={<CoatingPage />} />
            <Route path="/window-tinting" element={<WindowTinting />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/exterior-detailing" element={<ExteriorDetailing />} />
            <Route path="/interior-detailing" element={<InteriorDetailing />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
