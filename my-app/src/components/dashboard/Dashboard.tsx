import HomeView from "./HomeView/HomeView";
import "./dashboard.css";
import ContentWrapper from "./ContentWrapper/ContentWrapper";

const Dashboard = () => {
  return (
    <ContentWrapper>
      <HomeView />
    </ContentWrapper>
  );
};

export default Dashboard;
