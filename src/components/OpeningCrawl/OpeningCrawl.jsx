import React from "react";
import { useSelector } from "react-redux";
import logo from "./logo.png";

function OpeningCrawlSection() {
  const selectedMovieId = useSelector((state) => state.selectedMovieId);

  return (
    <section className="opening-crawl">
      {selectedMovieId === 0 ? (
        <img src={logo} alt="The star wars logo" />
      ) : (
        <p>Movie text and if nothing is selected then show logo</p>
      )}
    </section>
  );
}

export default OpeningCrawlSection;
