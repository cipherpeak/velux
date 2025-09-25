import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./components/layout/Layout";
import FilmWrapping from "./Pages/Services/FilmWrapping";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/film-wrapping" element={<FilmWrapping />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
