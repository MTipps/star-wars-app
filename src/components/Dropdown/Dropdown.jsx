import React from "react";
import { Dropdown } from "semantic-ui-react";

import "./Dropdown.css";

function DropdownSection(props) {
  const properties = props;

  function handleChange(event, { value }) {
    properties.onChange(value);
  }

  return (
    <section className="dropdown">
      <p className="dropdown__text">
        Please select a movie from the dropdown for more information
      </p>
      <Dropdown
        placeholder="Select a movie"
        fluid
        selection
        options={properties.movies}
        value={properties.selectedMovieId}
        loading={properties.loadingState}
        onChange={handleChange}
      />
    </section>
  );
}

export default DropdownSection;
