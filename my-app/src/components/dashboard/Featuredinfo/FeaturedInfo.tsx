import "./featuredinfo.css";
import {
  TrendingUp,
  PersonOutlined,
  DevicesOutlined,
  MoreVert,
} from "@mui/icons-material";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Open positions</span>
        <div className="featuredNumbersContainer">
          <span className="featuredNumber">156</span>
          <span className="featuredNumberRate bull">+38%</span>
        </div>
        <div className="featuredSubContainer">
          <span className="yearly">yearly</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Candidates</span>
        <div className="featuredNumbersContainer">
          <span className="featuredNumber">24.5K</span>
          <span className="featuredNumberRate bear">-22%</span>
        </div>
        <div className="featuredSubContainer">
          <span className="weekly">last week</span>
        </div>
      </div>
      <div className="generalItem">
        <div className="featuredItem">
          <span className="featuredTitle">General</span>
          <span className="SettingsIcon">
            <MoreVert />
          </span>
          <div className="featuredInfoContainer">
            <span className="featuredInfo">Total 48.5% growth 😎</span>
            <span className="featuredInfoMonth"> this month</span>
          </div>
          <div className="featuredPositionsContainer">
            <div className="featuredEmployees">
              <div className="featuredEmployeesIcon trending">
                <span className="featuredIcon">
                  <TrendingUp />
                </span>
              </div>
              <div>
                <div className="featuredEmployeesHeading">Employees</div>
                <div className="featuredGeneralNumber">245k</div>
              </div>
            </div>
            <div className="featuredEmployees">
              <div className="featuredEmployeesIcon person">
                <span className="featuredIcon">
                  <PersonOutlined />
                </span>
              </div>
              <div>
                <div className="featuredEmployeesHeading">Candidates</div>
                <div className="featuredGeneralNumber">12.5k</div>
              </div>
            </div>
            <div className="featuredEmployees">
              <div className="featuredEmployeesIcon devices">
                <span className="featuredIcon">
                  <DevicesOutlined />
                </span>
              </div>
              <div>
                <div className="featuredEmployeesHeading">Interviews</div>
                <div className="featuredGeneralNumber">1.54k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
