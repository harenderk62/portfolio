import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import useLocation
import "./sideNav.scss";
import logo from '../assets/H-removed.webp';
import { FaGithub, FaLinkedin, FaUser, FaRobot } from 'react-icons/fa';
import { HiOutlineLogin } from 'react-icons/hi';

const NavBar = ({ toggleGeminiChat, showGeminiChat }) => { // Receive toggleGeminiChat and showGeminiChat props
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get current location

  const phrases = [
    "Harender Kumar",
    "Software Developer",
    "Full Stack Developer"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[index];
    let timeout;

    if (!isDeleting) {
      if (typedText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setTypedText(currentPhrase.substring(0, typedText.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.substring(0, typedText.length - 1));
        }, 100);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, index, isDeleting]);

  // Handle click for Gemini Chatbot button
  const handleGeminiChatClick = () => {
      setIsMenuOpen(false); // Close mobile menu after clicking
  };

  // Check session storage on initial load for about page
  useEffect(() => {
    if (location.pathname === "/about" && sessionStorage.getItem("showGeminiChatOnAbout") === "true") {
      toggleGeminiChat();
      sessionStorage.removeItem("showGeminiChatOnAbout"); // Clean up
    }
  }, [location.pathname, toggleGeminiChat]);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <NavLink to={"/"}>
            <div className="logo-wrapper">
              <img src={logo} alt="Logo" className="logo-image" />
              <div className="logo-text">
                <span>{typedText}</span>
                <span className="cursor">|</span>
              </div>
            </div>
          </NavLink>
        </div>

        <div className={`nav-items-container ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li>
              <NavLink to="https://www.linkedin.com/in/harenderkumardtu/" className="nav-item" target="_blank">
                <FaLinkedin className="nav-icon" />
                <span>LinkedIn</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="https://github.com/harenderk62" className="nav-item" target="_blank">
                <FaGithub className="nav-icon" />
                <span>Github</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/ask-me-anything"}
                className="nav-item"
                onClick={handleGeminiChatClick} // Close mobile menu on click
              >
                <FaRobot className="nav-icon" />
                <span>Ask Me Anything!</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="http://chat-portfolio.s3-website.ap-south-1.amazonaws.com/" className="nav-item">
                <FaRobot className="nav-icon" />
                <span>GenAI Chatbot</span>
              </NavLink>
            </li>
          </ul>
          {/* <button className="sign-in">
            <HiOutlineLogin className="sign-in-icon" />
            <span>Sign in</span>
          </button> */}
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`menu-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-line ${isMenuOpen ? 'open' : ''}`}></div>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;