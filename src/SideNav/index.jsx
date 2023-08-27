import { useState, useMemo } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Redirect Images
import User from "../assets/myself.png";
import LinkedIn from "../assets/linkedIn.svg";
import Github from "../assets/github.svg";
import Youtube from "../assets/youtube.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Medium from "../assets/medium.svg";

// List Images
import "./sideNav.scss";

const SideNav = () => {
  const navigate = useNavigate();

  const menuItems = useMemo(
    () => [
      { name: "About Me", icon: "person_pin", route: "/" },
      { name: "Portfolio", icon: "work", route: "/portfolio" },
      { name: "Skills", icon: "auto_fix_high", route: "/skills" },
      { name: "Resume", icon: "description", route: "/resume" },
      {
        name: "Certificates",
        icon: "workspace_premium",
        route: "/certificates",
      },
      { name: "Contact", icon: "contact_mail", route: "/contact" },
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

    // let menuItem = menuItems.find((obj) => obj.name === tab);

    // navigate(menuItem.route);
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
              // className={`${activeTab === item.name && "active"}`}
              key={index}
              onClick={() => activeTabHandler(item.name)}
            >
              <NavLink
                to={item.route}
                activeclassname="active"
                className="navLink"
              >
                <span
                  className="material-icons"
                  style={{
                    width: "10px",
                    padding: "0 10px",
                  }}
                >
                  {item.icon}
                </span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
