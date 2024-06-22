import CopyIcon, { LinkedInIcon, PhoneIcon } from "../icons/icon";
import { GmailIcon, GithubIcon } from "./../icons/icon";
import "./connection.scss";
import { useState } from "react";

import config from "./../../../config.json";

const { emailId, github, linkedIn, phoneNumber } = config;

const addHttps = (link) => `https://${link}`;

const defaultCopyState = {
  [emailId]: false,
  [github]: false,
  [linkedIn]: false,
  [phoneNumber]: false,
};

const Connection = ({ containerClassName = "" }) => {
  const [copyObj, setCopyObj] = useState(defaultCopyState);

  const onClick = async (event, linkToCopy) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(linkToCopy);
      setCopyObj({ ...defaultCopyState, [linkToCopy]: true });
    } catch (err) {
      alert('Copy failed!');
    }
  };
  return (
    <div className={`${containerClassName}`}>
      <div className="social">
        {/* Note: files in the public directory are served at the root path 
        therefore instead of /public/instagram.png use /instagram.png
        */}
        <a
          href={addHttps(linkedIn)}
          aria-label="Contact through LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon title="LinkedIn" />
          <span className="icon-text">{linkedIn}</span>
          <span onClick={() => onClick(event, linkedIn)}>
            <CopyIcon isTick={copyObj[linkedIn]} />
          </span>
        </a>

        <a
          href={addHttps(github)}
          aria-label="Contact through Github"
          title={`Go to ${github}`}
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
          <span className="icon-text">{github}</span>
          <span onClick={() => onClick(event, github)}>
            <CopyIcon isTick={copyObj[github]} />
          </span>
        </a>
        <a
          href={`mailto:${emailId}`}
          aria-label="Contact through Gmail"
          title={`mailTo:${emailId}`}
          target="_blank"
          rel="noreferrer"
        >
          <GmailIcon />
          <span className="icon-text">{emailId}</span>
          <span onClick={() => onClick(event, emailId)}>
            <CopyIcon isTick={copyObj[emailId]} />
          </span>
        </a>
        <a href={phoneNumber}>
          <PhoneIcon />
          <span className="icon-text">{phoneNumber}</span>
          <span onClick={() => onClick(event, phoneNumber)}>
            <CopyIcon isTick={copyObj[phoneNumber]} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Connection;
