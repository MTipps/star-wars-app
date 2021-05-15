import React from "react";
import { Dropdown } from "semantic-ui-react";

const dummyData = [
  {
    key: "Dummy 1",
    text: "Dummy 1",
    value: "Dummy 1",
  },
  {
    key: "Dummy 2",
    text: "Dummy 2",
    value: "Dummy 2",
  },
  {
    key: "Dummy 3",
    text: "Dummy 3",
    value: "Dummy 3",
  },
];

function DropdownSection() {
  return (
    <section className="dropdown">
      <p>Please select a movie from the dropdown for more information</p>
      <Dropdown
        placeholder="Select a movie"
        fluid
        selection
        options={dummyData}
      />
    </section>
  );
}

export default DropdownSection;
