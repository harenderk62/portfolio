import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

// Redirect Images
import LinkedIn from "../assets/linkedIn.svg";
import Github from "../assets/github.svg";
import Youtube from "../assets/youtube.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Medium from "../assets/medium.svg";

// List Images
import "./mobileNav.scss";

const DownNav = () => {
  const navigate = useNavigate();

  const menuItems = useMemo(
    () => [
      { name: "About Me", icon: "person_pin", route: "/" },
      { name: "Portfolio", icon: "work", route: "/portfolio" },
      // { name: "Skills", icon: "auto_fix_high", route: "/skills" },
      { name: "Genie", icon: "auto_awesome", route: "/" },
      { name: "Resume", icon: "description", route: "/resume" },
      // {
      //   name: "Certificates",
      //   icon: "workspace_premium",
      //   route: "/certificates",
      // },
      { name: "Contact", icon: "contact_mail", route: "/contact" },
    ],
    []
  );

  // const imageData = useMemo(
  //   () => [
  //     { title: "LinkedIn", src: LinkedIn },
  //     { title: "Github", src: Github },
  //     { title: "YouTube", src: Youtube },
  //     { title: "WhatsApp", src: Whatsapp },
  //     { title: "Medium", src: Medium },
  //   ],
  //   []
  // );

  var activeTabFromSession = sessionStorage.getItem("activeTab");

  const [activeTab, setActiveTab] = useState(
    activeTabFromSession ? activeTabFromSession : "About Me"
  );

  const activeTabHandler = (tab) => {
    sessionStorage.setItem("activeTab", tab);
    setActiveTab(tab);

    let menuItem = menuItems.find((obj) => obj.name === tab);

    if (menuItem.name === "Genie") {
      window.location.href =
        "http://chat-portfolio.s3-website.ap-south-1.amazonaws.com/";
    } else {
      navigate(menuItem.route);
    }
  };

  return (
    <div className="mobileNav-Container">
      <ul className="navOptions">
        {menuItems.map((item, index) => (
          <li
            className={`${activeTab === item.name ? "active" : ""} ${
              item.name === "Genie" && "Genie"
            }`}
            key={index}
            onClick={() => activeTabHandler(item.name)}
          >
            <p
              className={`mobile-navIcon ${
                item.name === "Genie" && "Genie-navIcon"
              }`}
            >
              <span
                className={`material-icons ${
                  item.name === "Genie" && "Genie-icons"
                }`}
                style={{
                  width: "10px",
                  color:
                    item.name === "Genie"
                      ? "yellow"
                      : activeTab === item.name
                      ? "#73f4b8"
                      : "",
                }}
              >
                {item.icon}
              </span>
            </p>
            <p
              className={`navTitle ${
                item.name === "Genie" && "Genie-navTitle"
              }`}
              style={{
                color:
                  item.name === "Genie"
                    ? "yellow"
                    : activeTab === item.name
                    ? "#73f4b8"
                    : "",
              }}
            >
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DownNav;
