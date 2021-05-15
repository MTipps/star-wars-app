import React from "react";
import { Form, Checkbox } from "semantic-ui-react";

function CharacterListFilterSection() {
  // state = {}
  // handleChange = (e, { value }) +> this.setState({value})

  return (
    <section className="character-list-filter">
      <div className="character-list-filter__selection">
        <Form>
          <Form.Field>
            <Checkbox
              radio
              label="All"
              name="characterListFilter"
              value="all"
              // checked={this.state.value === "all"}
              // onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label="Female"
              name="characterListFilter"
              value="female"
              // checked={this.state.value === "all"}
              // onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label="Male"
              name="characterListFilter"
              value="male"
              // checked={this.state.value === "all"}
              // onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
      </div>
    </section>
  );
}

export default CharacterListFilterSection;
