import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Social = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const socialMedia = useMemo(
    () => [
      {
        title: "LinkedIn",
        icon: "fa fa-linkedin",
        link: "https://www.linkedin.com/in/harenderkumardtu/",
      },
      {
        title: "Github",
        icon: "fa fa-github",
        link: "https://github.com/harenderk62",
      },
      // {
      //   title: "YouTube",
      //   icon: "fa fa-youtube-play",
      //   link: "https://www.youtube.com/@dev-Insider",
      // },
      // {
      //   title: "WhatsApp",
      //   icon: "fa fa-whatsapp",
      //   link: "https://wa.me/917048941490",
      // },
      // {
      //   title: "Hacker Rank",
      //   icon: "fa fa-brands fa-hackerrank",
      //   link: "https://www.hackerrank.com/harenderk62?hr_r=1",
      // },
    ],
    []
  );

  return (
    <div className={isMobile ? "mb-social" : "iconContainer"}>
      {socialMedia.map((item, index) => (
        <NavLink
          to={item.link}
          key={index}
          className="mb-social-redirect"
          target="_blank"
        >
          <i className={item.icon} title={item.title}></i>
        </NavLink>
      ))}
    </div>
  );
};

export default Social;
