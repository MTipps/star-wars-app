import React from "react";
import { Dropdown } from "semantic-ui-react";

function DropdownSection(props) {
  const properties = props;

  function handleChange(event, { value }) {
    properties.onChange(value);
  }

  return (
    <section className="dropdown">
      <p>Please select a movie from the dropdown for more information</p>
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
