import { useState, useMemo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Social from "../Components/social";

// Redirect Images
import User from "../assets/myself.webp";

// List Images
import "./sideNav.scss";

const SideNav = () => {
  // const navigate = useNavigate();

  const menuItems = useMemo(
    () => [
      { name: "About Me", icon: "person_pin", route: "/" },
      // { name: "Portfolio", icon: "work", route: "/portfolio" },
      // { name: "Skills", icon: "auto_fix_high", route: "/skills" },
      { name: "Genie", icon: "auto_awesome", route: "/" },
      // { name: "Resume", icon: "description", route: "/resume" },
      // {
      //   name: "Certificates",
      //   icon: "workspace_premium",
      //   route: "/certificates",
      // },
      // { name: "Contact", icon: "contact_mail", route: "/contact" },
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
  };

  return (
    <div className="container">
      <div className="info">
        <p className="info-name">Harender Kumar</p>
        <img src={User} alt="profile" loading="lazy" title="Harender Kumar" />
        <p className="info-about">
          Hi, My name is Harender Kumar and I'm a Software Engineer. Welcome to
          my personal Website
        </p>
      </div>

      <hr />
      <Social />
      <hr />

      <div className="list">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} onClick={() => activeTabHandler(item.name)}>
              {item.name !== "Genie" ? (
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
              ) : (
                <div
                  className="navLink"
                  onClick={() =>
                    (window.location.href =
                      "http://chat-portfolio.s3-website.ap-south-1.amazonaws.com/")
                  }
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
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
