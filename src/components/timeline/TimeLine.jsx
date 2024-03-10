import "./timeline.scss";

const TimeLine = ({ experiencesList = [] }) => {
  return (
    <div className="time-line-container">
         <h1>Experience</h1>
      <div className="timeline">
        {experiencesList.map((obj, index) => {
          const { year, designation, workDescription, company, skillsUsed } =
            obj;
          return (
            <div
              key={index}
              className={`container ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="content">
                <h4>
                  <u>{designation}</u>
                </h4>
                <div style={{ display: "flex" }}>
                  <strong>
                    <label htmlFor="year">Year:&nbsp;</label>
                  </strong>
                  <p>{year}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <strong>
                    <label htmlFor="Company">Company:&nbsp;</label>
                  </strong>
                  <p>{company}</p>
                </div>
                <p>{workDescription}</p>
                <div style={{ display: "flex" }}>
                  <strong>
                    <label htmlFor="Skills">Skills:&nbsp;</label>
                  </strong>
                  <p aria-labelledby="Skills">{skillsUsed.join(", ")}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeLine;
