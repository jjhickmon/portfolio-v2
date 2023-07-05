import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Leadership from "./pages/leadership";
import AboutMe from "./pages/aboutme";
import NoPage from "./pages/nopage";
import NoPageSubpage from "./pages/nopage-subpage";
import Raivn from "./pages/raivn";
import UW from "./pages/uw";
import Amazon from "./pages/amazon";
import CodeOrg from "./pages/code-org";
import Peleg from "./pages/peleg";

// To test the app, run the following command in the terminal:
// npm start

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="experience/raivn" element={<Raivn/>} />
        <Route path="experience/uw" element={<UW/>} />
        <Route path="experience/amazon" element={<Amazon/>} />
        <Route path="experience/code-org" element={<CodeOrg/>} />
        <Route path="experience/peleg" element={<Peleg/>} />
        <Route path="experience/*" element={<NoPageSubpage/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
