import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./Pages/about";
import Portfolio from "./Pages/portfolio";
import Skills from "./Pages/skills";
import Resume from "./Pages/resume";
import Certificate from "./Pages/certificate";
import Connect from "./Pages/connect";
import SideNav from "./SideNav";

const App = () => {
  return (
    <BrowserRouter>
      <SideNav />
      <Routes>
        <Route path="/" Component={AboutMe} />
        <Route path="/portfolio" Component={Portfolio} />
        <Route path="/skills" Component={Skills} />
        <Route path="/resume" Component={Resume} />
        <Route path="/certificates" Component={Certificate} />
        <Route path="/contact" Component={Connect} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
