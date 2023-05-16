import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import AboutMe from "./pages/aboutme";
import NoPage from "./pages/nopage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
