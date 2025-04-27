import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AboutMe from "./Pages/about";
import Portfolio from "./Pages/portfolio";
import Skills from "./Pages/skills";
import Resume from "./Pages/resume";
import Certificate from "./Pages/certificate";
import Connect from "./Pages/connect";
import NavBar from "./SideNav/index";
import FAB from "./Components/FAB"
import ScrollTop from "./Components/scrollTop";

const FabConditionalRenderer = () => {
 const location = useLocation();

 return ["/resume", "/contact"].includes(location.pathname) ? null : <FAB />;
};

const App = () => {
  
  return (
    <BrowserRouter>
    <NavBar />
     <Routes>
        <Route path="/" Component={AboutMe} />
        <Route path="/about" Component={AboutMe} />
        <Route path="/resume" Component={Resume} />
        <Route path="/certificates" Component={Certificate} />
        <Route path="/contact" Component={Connect} />
      </Routes>
      <FabConditionalRenderer />
      <ScrollTop />
    </BrowserRouter>
  );
}; 

export default App;
