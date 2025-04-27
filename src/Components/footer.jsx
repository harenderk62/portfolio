import './footer.scss';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-copyright">
          <span className="copyright-symbol">©</span>
          <span>{currentYear} Harender Kumar</span>
        </div>
        
        <div className="footer-social">
          <a href="https://github.com/harenderk62" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/harenderkumardtu/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="mailto:harenderk62@email.com">
            <FaEnvelope className="social-icon" />
          </a>
        </div>
        
        <div className="footer-message">
          <span>Built with</span>
          <FaHeart className="heart-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;