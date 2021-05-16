import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "semantic-ui-react";

const dummyData = [
  {
    key: "Select a Movie",
    text: "Select a Movie",
    value: "0",
  },
  {
    key: "Dummy 1",
    text: "Dummy 1",
    value: "1",
  },
  {
    key: "Dummy 2",
    text: "Dummy 2",
    value: "2",
  },
  {
    key: "Dummy 3",
    text: "Dummy 3",
    value: "3",
  },
];

function DropdownSection() {
  const dispatch = useDispatch();
  const selectedMovieId = useSelector((state) => state.selectedMovieId);

  const handleChange = (event, { value }) => {
    dispatch({ type: "newMovieId", movieId: value });
  };

  return (
    <section className="dropdown">
      <p>Please select a movie from the dropdown for more information</p>
      <Dropdown
        placeholder="Select a movie"
        fluid
        selection
        defaultValue={selectedMovieId}
        options={dummyData}
        onChange={handleChange}
      />
    </section>
  );
}

export default DropdownSection;
