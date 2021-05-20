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
        <div className="opening-crawl__board">
          <div className="opening-crawl__text opening-crawl__text-animation">
            <p>{properties.openingCrawl}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default OpeningCrawlSection;
