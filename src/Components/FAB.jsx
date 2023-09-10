import { useNavigate } from "react-router-dom";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useMediaQuery } from "react-responsive";

const actions = [
  { icon: <ArticleOutlinedIcon />, name: "View Resume" },
  { icon: <GetAppOutlinedIcon />, name: "Download Resume" },
  { icon: <LinkedInIcon />, name: "Connect" },
];

const FAB = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  //

  const fabClick = (e) => {
    const action = e.currentTarget.ariaLabel;

    if (action === "View Resume") {
      sessionStorage.setItem("activeTab", "Resume");
      navigate("/resume");
    } else if (action === "Download Resume") {
      console.log("first", e.currentTarget.ariaLabel);
    } else if (action === "Connect") {
      window.location.href = "https://www.linkedin.com/in/harenderkumardtu/";
    }
  };

  return (
    <SpeedDial
      ariaLabel="SpeedDial"
      sx={{
        position: "fixed",
        bottom: isMobile ? 75 : 36,
        right: isMobile ? 10 : 16,
      }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={(e) => fabClick(e)}
        />
      ))}
    </SpeedDial>
  );
};

export default FAB;
