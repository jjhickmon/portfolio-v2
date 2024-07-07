import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
// import Experience from "./pages/experience";
// import Projects from "./pages/projects";
import Leadership from "./pages/leadership";
import AboutMe from "./pages/aboutme";
import NoPage from "./pages/nopage";
import NoPageSubpage from "./pages/nopage-subpage";
import Projects from "./pages/projects";
import Research from "./pages/research";

// import Raivn from "./pages/experience/raivn";
// import UW from "./pages/experience/uw";
// import Amazon from "./pages/experience/amazon";
// import CodeOrg from "./pages/experience/code-org";
// import Peleg from "./pages/experience/peleg";

import ProjectMuSE from "./pages/projects/muse";
import ProjectD3G from "./pages/projects/d3g";
import ProjectMultispectral from "./pages/projects/multispectral";
import ProjectBees from "./pages/projects/bees";
import ProjectEasyship from "./pages/projects/easyship";
import ProjectXMem from "./pages/projects/xmem";
import ProjectDigitalTether from "./pages/projects/digital-tether";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" index element={<Home />} />
        {/* <Route path="experience" element={<Experience />} /> */}
        <Route path="projects" element={<Projects />} />
        <Route path="research" element={<Research />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="projects/muse" element={<ProjectMuSE />} />
        <Route path="projects/d3g" element={<ProjectD3G />} />
        <Route path="projects/multispectral" element={<ProjectMultispectral />} />
        <Route path="projects/bees" element={<ProjectBees />} />
        <Route path="projects/easyship" element={<ProjectEasyship />} />
        <Route path="projects/xmem" element={<ProjectXMem />} />
        <Route path="projects/digital-tether" element={<ProjectDigitalTether />} />

        {/* <Route path="experience/raivn" element={<Raivn/>} />
        <Route path="experience/uw" element={<UW/>} />
        <Route path="experience/amazon" element={<Amazon/>} />
        <Route path="experience/code-org" element={<CodeOrg/>} />
        <Route path="experience/peleg" element={<Peleg/>} /> */}
        <Route path="projects/*" element={<NoPageSubpage/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </AnimatePresence>
  );
};
export default AnimatedRoutes;