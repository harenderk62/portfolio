import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/home";
import AskMeAnything from "./Pages/askMeAnything";
import Resume from "./Pages/resume";
import Certificate from "./Pages/certificate";
import Connect from "./Pages/connect";
import NavBar from "./SideNav/index";
import FAB from "./Components/FAB";
import ScrollTop from "./Components/scrollTop";

const FabConditionalRenderer = () => {
  const location = useLocation();

  return ["/resume", "/contact"].includes(location.pathname) ? null : <FAB />;
};

const App = () => {
  return (
    <BrowserRouter>
      {/* Pass showGeminiChat and toggleGeminiChat to NavBar */}
      <NavBar />
      <Routes>
        {/* Pass showGeminiChat to AboutMe */}
        <Route path="/" element={<Home />} />
        <Route path="/ask-me-anything" element={<AskMeAnything />} />
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
