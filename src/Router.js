import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AboutMe from "./Pages/about";
import Portfolio from "./Pages/portfolio";
import Skills from "./Pages/skills";
import Resume from "./Pages/resume";
import Certificate from "./Pages/certificate";
import Connect from "./Pages/connect";
import SideNav from "./SideNav/index";
import MobileNav from "./SideNav/indexMobile";
import { useMediaQuery } from "react-responsive";
import FAB from "./Components/FAB";

const FabConditionalRenderer = () => {
  const location = useLocation();

  return ["/resume", "/contact"].includes(location.pathname) ? null : <FAB />;
};

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <BrowserRouter>
      {isMobile ? <MobileNav /> : <SideNav />}
      <Routes>
        <Route path="/" Component={AboutMe} />
        <Route path="/portfolio" Component={Portfolio} />
        <Route path="/skills" Component={Skills} />
        <Route path="/resume" Component={Resume} />
        <Route path="/certificates" Component={Certificate} />
        <Route path="/contact" Component={Connect} />
      </Routes>
      <FabConditionalRenderer />
    </BrowserRouter>
  );
};

export default App;
