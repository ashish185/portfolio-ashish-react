import "./AboutMe.scss";

export const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h2 className="heading">About me!</h2>
      <div className="about-me">
        <div className="description">
          Hi, I&apos;m Ashish, a web developer and UI/UX designer with a passion
          for creating beautiful, functional, and user-centered digital
          experiences.
          <p>
            With 5+ years of experience in the field. I am always looking for
            new and innovative ways to bring Consumers visions to life.
          </p>
          <p className="sub-description">
            I believe that design is about more than just making things look
            pretty – it&apos;s about solving problems and creating intuitive,
            enjoyable experiences for users.
          </p>
        </div>

        <div className="companies-experiences">
          <h3>Companies I worked upon</h3>
          <div className="companies">
            <a href="https://www.nagarro.com/en">
              <img src="./nagarro.png" alt="nagarro company logo" />
            </a>
            <a href="https://www.soprasteria.com/">
              <img src="./soprasteria.png" alt="sopra steria company logo" />
            </a>
          </div>
        </div>
        {/* <div className="mountains"></div> */}
        {/* <div className="planets"></div> */}
        {/* <div className="stars"></div> */}
      </div>
    </div>
  );
};
