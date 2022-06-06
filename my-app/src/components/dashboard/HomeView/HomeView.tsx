import "./homeview.css";
import FeaturedInfo from "../Featuredinfo/FeaturedInfo";
import Chart from "../Chart/Chart";
import Timeline from "../Timeline/Timeline";

const HomeView = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <div className="bottomContainer">
        <Chart />
        <Timeline />
      </div>
    </div>
  );
};

export default HomeView;
