import "./contentwrapper.css";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import { contentProps } from "../../../models/ComponentsType";

const ContentWrapper = (props: contentProps) => {
  return (
    <div className="wrapper">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="mainContainer">{props.children}</div>
      </div>
    </div>
  );
};

export default ContentWrapper;
