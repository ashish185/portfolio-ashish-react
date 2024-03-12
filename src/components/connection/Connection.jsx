import { LinkedInIcon } from "../icons/icon";
import { GmailIcon, GithubIcon } from "./../icons/icon";
import './connection.scss';

const Connection = ({ containerClassName = "" }) => {
  return (
    <div className={`${containerClassName}`}>
      <div className="social">
        {/* Note: files in the public directory are served at the root path 
        therefore instead of /public/instagram.png use /instagram.png
        */}
        <a
          href="https://www.linkedin.com/in/ashish185/"
          aria-label="Contact through LinkedIn"
          title="LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <a
          href="mailto:singhalash185@gmail.com"
          aria-label="Contact through Gmail"
          title="Gmail"
        >
          <GmailIcon />
        </a>
        <a
          href="https://github.com/ashish185"
          aria-label="Contact through Github"
          title="Github"
        >
          <GithubIcon />
        </a>
      </div>
    </div>
  );
};

export default Connection;
