import React from "react";
import logo from "./logo.png";

function OpeningCrawlSection(props) {
  const properties = props;

  return (
    <section className="opening-crawl">
      {properties.selectedMovieId === undefined ? (
        <img src={logo} alt="The star wars logo" />
      ) : (
        <p>{properties.openingCrawl}</p>
      )}
    </section>
  );
}

export default OpeningCrawlSection;
