import CopyIcon, { LinkedInIcon } from "../icons/icon";
import { GmailIcon, GithubIcon } from "./../icons/icon";
import "./connection.scss";
import React from "react";

import config from "./../../../config.json";

const { emailId, github, linkedIn, phoneNumber } = config;

const PhoneIcon = (props) => (
  <svg
    width="1em"
    height="0.8em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.62 10.79C8.06 13.13 10.87 15.94 13.21 17.38L15.27 15.32C15.68 14.91 16.32 14.76 16.87 14.91C18.15 15.27 19.55 15.5 21 15.5C21.55 15.5 22 15.95 22 16.5V21C22 21.55 21.55 22 21 22C10.51 22 2 13.49 2 3C2 2.45 2.45 2 3 2H7.5C8.05 2 8.5 2.45 8.5 3C8.5 4.45 8.73 5.85 9.09 7.13C9.24 7.68 9.09 8.32 8.68 8.73L6.62 10.79Z"
      fill="currentColor"
    />
  </svg>
);

const onClick = async (event, linkToCopy) => {
  event.preventDefault();
  event.stopPropagation();
  try {
    await navigator.clipboard.writeText(linkToCopy);
  } catch (err) {
    // setCopySuccess('Failed to copy!');
  }
  console.log(event.currentTarget);
};

const Connection = ({ containerClassName = "" }) => {
  return (
    <div className={`${containerClassName}`}>
      <div className="social">
        {/* Note: files in the public directory are served at the root path 
        therefore instead of /public/instagram.png use /instagram.png
        */}
        <a href={linkedIn} aria-label="Contact through LinkedIn" target="_blank" rel="noreferrer">
          <LinkedInIcon title="LinkedIn" />
          <span>{linkedIn}</span>
          <span onClick={() => onClick(event, linkedIn)}>
            <CopyIcon />
          </span>
        </a>

        <a
          href={github}
          aria-label="Contact through Github"
          title={`Go to ${github}`}
        >
          <GithubIcon />
          <span>{github}</span>
          <span onClick={() => onClick(event, github)}>
            <CopyIcon />
          </span>
        </a>
        <a
          href="mailto:singhalash185@gmail.com"
          aria-label="Contact through Gmail"
          title={`mailTo:${emailId}`}
        >
          <span>{emailId}</span>
          <span onClick={() => onClick(event, emailId)}>
            <CopyIcon />
          </span>
        </a>
        <a href={phoneNumber}>
          <span>{phoneNumber}</span>
          <span onClick={() => onClick(event, phoneNumber)}>
            <CopyIcon />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Connection;
