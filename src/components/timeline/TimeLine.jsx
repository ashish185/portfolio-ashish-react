import "./timeline.scss";

const TimeLine = ({ experiencesList = [] }) => {
  return (
    <div className="timeline">
      {experiencesList.map((obj, index) => {
        const {
          year,
          designation,
          workDescription,
        } = obj;
        return (
          <div
            key={index}
            className={`container ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="content">
              <h2>
                {year}
                {/* {`(${year}` +
                  `${currentlyWorking ? "- Present" : ""}`.trim() +
                  ")"} */}
                &nbsp;
              </h2>
              <h3>
                <u>{designation}</u>
              </h3>
              <p>{workDescription}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TimeLine;
