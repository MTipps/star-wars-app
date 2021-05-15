import React from "react";
import logo from "./logo.png";

function OpeningCrawlSection() {
  return (
    <section className="opening-crawl">
      <p>Movie text and if nothing is selected then show logo</p>
      <img src={logo} alt="The star wars logo" />
    </section>
  );
}

export default OpeningCrawlSection;
