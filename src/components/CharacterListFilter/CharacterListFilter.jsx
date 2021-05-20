import React from "react";
import { Form, Checkbox } from "semantic-ui-react";

import "./CharacterListFilter.css";

function CharacterListFilterSection(props) {
  const properties = props;

  function handleChange(event, { value }) {
    properties.onChange(value);
  }

  return (
    <section className="character-list-filter">
      <p className="character-list-filter__text">Filter characters by:</p>
      <div className="character-list-filter__selection">
        <Form>
          <Form.Group widths="equal">
            <Form.Field>
              <Checkbox
                radio
                label="All"
                name="characterListFilter"
                value="all"
                checked={properties.characterFilter === "all"}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                radio
                label="Female"
                name="characterListFilter"
                value="female"
                checked={properties.characterFilter === "female"}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                radio
                label="Male"
                name="characterListFilter"
                value="male"
                checked={properties.characterFilter === "male"}
                onChange={handleChange}
              />
            </Form.Field>
          </Form.Group>
        </Form>
      </div>
    </section>
  );
}

export default CharacterListFilterSection;
