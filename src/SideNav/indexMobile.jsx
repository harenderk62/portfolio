import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

// Redirect Images
import User from "../assets/myself.png";
import LinkedIn from "../assets/linkedIn.svg";
import Github from "../assets/github.svg";
import Youtube from "../assets/youtube.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Medium from "../assets/medium.svg";

// List Images
import UserNrm from "../assets/ListIcon/user.svg";
import Portfolio from "../assets/ListIcon/portfolio.svg";
import Skills from "../assets/ListIcon/skills.svg";
import Resume from "../assets/ListIcon/resume.svg";
import Certificates from "../assets/ListIcon/certificate.svg";
import Contact from "../assets/ListIcon/contact.svg";
import "./mobileNav.scss";

const DownNav = () => {
  const navigate = useNavigate();

  const menuItems = useMemo(
    () => [
      { name: "About Me", icon: UserNrm, route: "/" },
      { name: "Portfolio", icon: Portfolio, route: "/portfolio" },
      { name: "Skills", icon: Skills, route: "/skills" },
      { name: "Resume", icon: Resume, route: "/resume" },
      { name: "Certificates", icon: Certificates, route: "/certificates" },
      { name: "Contact", icon: Contact, route: "/contact" },
    ],
    []
  );

  const imageData = useMemo(
    () => [
      { title: "LinkedIn", src: LinkedIn },
      { title: "Github", src: Github },
      { title: "YouTube", src: Youtube },
      { title: "WhatsApp", src: Whatsapp },
      { title: "Medium", src: Medium },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState("About Me");

  const activeTabHandler = (tab) => {
    setActiveTab(tab);

    let menuItem = menuItems.find((obj) => obj.name === tab);

    navigate(menuItem.route);
  };

  return (
    <div className="mobileNav-Container">
      <ul className="navOptions">
        {menuItems.map((item, index) => (
          <li
            className={`${activeTab === item.name && "active"}`}
            key={index}
            onClick={() => activeTabHandler(item.name)}
          >
            <img className="MobileIcon" src={item.icon} alt="Icon" />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DownNav;
