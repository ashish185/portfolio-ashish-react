import "./timeline.scss";

const TimeLine = ({ experiencesList = [] }) => {
  return (
    <div className="timeline">
      {experiencesList.map((obj, index) => {
        const {
          year,
          designation,
          workDescription,
          company,
          skillsUsed
        } = obj;
        return (
          <div
            key={index}
            className={`container ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="content">
              <h3>
                {year}&nbsp;
                <u>{designation}</u>
              </h3>
              <h4 style={{ display: "flex" }}>
                <strong>
                  <label htmlFor="Company">Company:&nbsp;</label>
                </strong>
                <p>{company}</p>
              </h4>
              <p>{workDescription}</p>
              <h4 style={{ display: "flex" }}>
                <b>
                  <label htmlFor="Skills">Skills:&nbsp;</label>
                </b>
                <p aria-labelledby="Skills">{skillsUsed.join(", ")}</p>
              </h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TimeLine;
