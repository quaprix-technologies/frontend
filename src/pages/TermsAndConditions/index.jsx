import React, { useEffect } from "react";
import "./styles.css";
import {termsAndConditions} from "./terms-and-conditions-data.js";

const TermsAndConditions = () => {

  const DescriptionWithLink = ({description}) => {
    const isUrl = description.includes('www.');
    const urlRegex = /(.*?)(https:\/\/[a-z.]*)(.*)/;
    const emailRegex = /^(.*?)\b([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,})\b(.*)$/;
    const regex = isUrl ? urlRegex : emailRegex;

    const matches = description.match(regex);
    if(matches) {
      const beforeLink = matches[1];
      const link = matches[2];
      const afterLink = matches[3];

      return <span>
        <span>{beforeLink}</span>
        <a href={isUrl ? link : `mailto:${link}`}>{isUrl ? link.replace('https://', '') : link}</a>
        <span>{afterLink}</span>
      </span>;
    }
    return null;
  }

  useEffect(() => {
    document.title = "Term & Condition";
  }, []);

  return (
    <div className="terms-conditions">
      <h1>TERMS & CONDITIONS</h1>
        { termsAndConditions.map(({title, description}) => {
            return (
                <div key={title}>
                    <h3>{title}</h3>
                  <p>
                    {description.includes('.com') ? <DescriptionWithLink description={description}/> : description}
                  </p>
                </div>
            )
        })}
    </div>
  );
};

export default TermsAndConditions;
