

import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
// import { Switch, Route, useLocation, useHistory } from "react-router-dom";

// To test the app, run the following command in the terminal:
// npm start

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" index element={<Home />} />
    //     <Route path="experience" element={<Experience />} />
    //     <Route path="projects" element={<Projects />} />
    //     <Route path="leadership" element={<Leadership />} />
    //     <Route path="aboutme" element={<AboutMe />} />
    //     <Route path="experience/raivn" element={<Raivn/>} />
    //     <Route path="experience/uw" element={<UW/>} />
    //     <Route path="experience/amazon" element={<Amazon/>} />
    //     <Route path="experience/code-org" element={<CodeOrg/>} />
    //     <Route path="experience/peleg" element={<Peleg/>} />
    //     <Route path="experience/*" element={<NoPageSubpage/>} />
    //     <Route path="*" element={<NoPage />} />
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
