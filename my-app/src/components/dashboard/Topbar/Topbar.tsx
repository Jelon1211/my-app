import "./topbar.css";
import {
  NotificationsNone,
  PersonOutline,
  LogoutOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/dashboard">
            <div className="logo">HR_BOARD</div>
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBag">2</span>
          </div>
          <div className="dropdown">
            <Link to="/dashboard">
              <img
                src="https://randomwordgenerator.com/img/picture-generator/55e6dd474b5baa14f1dc8460962e33791c3ad6e04e5074417c2d78d19f48c3_640.jpg"
                alt=""
                className="topAvatar"
              />
            </Link>
            <div className="dropdown-content">
              <Link to="/profile">
                <div className="dropdown-contentItems">
                  <img
                    src="https://randomwordgenerator.com/img/picture-generator/55e6dd474b5baa14f1dc8460962e33791c3ad6e04e5074417c2d78d19f48c3_640.jpg"
                    alt=""
                    className="topAvatar"
                  />{" "}
                  <span className="dropdown-contentNames">
                    <div className="dropdown-text">John Doe</div>
                    <div className="dropdown-secondaryText">Admin</div>
                  </span>
                </div>
              </Link>
              <hr className="dropdownDivider"></hr>
              <Link to="/profile">
                <div className="dropdown-contentItems">
                  <PersonOutline />
                  <span className="dropdown-contentNames">
                    <div className="dropdown-text">Profile</div>
                  </span>
                </div>
              </Link>
              <hr className="dropdownDivider"></hr>
              <Link to="/signin">
                <div className="dropdown-contentItems">
                  <LogoutOutlined />
                  <span className="dropdown-contentNames">
                    <div className="dropdown-text">Logout</div>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
