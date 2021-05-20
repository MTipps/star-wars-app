import React from "react";
import { Image } from "semantic-ui-react";

import logo from "./logo.png";

import "./OpeningCrawl.css";

function OpeningCrawlSection(props) {
  const properties = props;

  return (
    <section className="opening-crawl">
      {properties.selectedMovieId === undefined ? (
        <Image src={logo} alt="The star wars logo" size="large" centered />
      ) : (
        // eslint-disable-next-line jsx-a11y/no-distracting-elements
        <marquee
          behavior="scroll"
          direction="up"
          className="opening-crawl__text"
          height="200"
        >
          {properties.openingCrawl}
        </marquee>
      )}
    </section>
  );
}

export default OpeningCrawlSection;
