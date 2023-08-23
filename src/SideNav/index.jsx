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
import "./sideNav.scss";

const SideNav = () => {
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

  var activeTabFromSession = sessionStorage.getItem("activeTab");

  const [activeTab, setActiveTab] = useState(
    activeTabFromSession ? activeTabFromSession : "About Me"
  );

  const activeTabHandler = (tab) => {
    sessionStorage.setItem("activeTab", tab);
    setActiveTab(tab);

    let menuItem = menuItems.find((obj) => obj.name === tab);

    navigate(menuItem.route);
  };

  return (
    <div className="container">
      <div className="info">
        <p className="info-name">Harender Kumar</p>
        <img src={User} alt="profile" title="Harender Kumar" />
        <p className="info-about">
          Hi, My name is Harender Kumar and I'm a Software Engineer. Welcome to
          my personal Website
        </p>
      </div>

      <hr />

      <div className="iconContainer">
        {imageData.map((item, index) => (
          <img src={item.src} alt="logo" title={item.title} key={index} />
        ))}
      </div>

      <hr />

      <div className="list">
        <ul>
          {menuItems.map((item, index) => (
            <li
              className={`${activeTab === item.name && "active"}`}
              key={index}
              onClick={() => activeTabHandler(item.name)}
            >
              <img src={item.icon} alt="Icon" />
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
