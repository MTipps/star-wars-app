import React from "react";
import { Image } from "semantic-ui-react";

import logo from "./logo.png";

import "./OpeningCrawl.css";

function OpeningCrawlSection(props) {
  const properties = props;

  return (
    <section className="opening-crawl">
      {properties.selectedMovieId === undefined ? (
        <Image src={logo} fluid alt="The star wars logo" />
      ) : (
        <p>{properties.openingCrawl}</p>
      )}
    </section>
  );
}

export default OpeningCrawlSection;
