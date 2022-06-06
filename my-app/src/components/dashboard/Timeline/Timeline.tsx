import "./timeline.css";

const Timeline = () => {
  return (
    <div className="timeLineContainer">
      <div className="timelineHeading">Activity Timeline</div>
      <div className="feedContainer">
        <div>
          <div className="feedHeading">
            <span className="feedNiceBall firstBall"></span>
            <span className="feedTitle">New interview setted up</span>
            <span className="feedDate">April, 18</span>
          </div>
          <div className="feedDetails">
            <span className="feedSeparator"></span>
            <img
              src="https://randomwordgenerator.com/img/picture-generator/55e6dd474b5baa14f1dc8460962e33791c3ad6e04e5074417c2d78d19f48c3_640.jpg"
              alt=""
              className="feedIcon"
            />
            <span className="feedName">Jan Nowak (python)</span>
          </div>
        </div>
        <div>
          <div className="feedHeading">
            <span className="feedNiceBall secondBall"></span>
            <span className="feedTitle">Order #37745 from September</span>
            <span className="feedDate">January, 10</span>
          </div>
          <div className="feedDetails">
            <span className="feedSeparator"></span>
            <span className="feedName feedText">
              Invoices have been paid to the company
            </span>
          </div>
        </div>
        <div>
          <div className="feedHeading">
            <span className="feedNiceBall thirdBall"></span>
            <span className="feedTitle">Tech conference</span>
            <span className="feedDate">September, 30</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
