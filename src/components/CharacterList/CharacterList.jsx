import React from "react";
import { Table } from "semantic-ui-react";

function CharacterListSection() {
  return (
    <Table columns={3}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Gender</Table.HeaderCell>
          <Table.HeaderCell>Height</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Dummy 1</Table.Cell>
          <Table.Cell>Female</Table.Cell>
          <Table.Cell>170</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Dummy 2</Table.Cell>
          <Table.Cell>Female</Table.Cell>
          <Table.Cell>170</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Dummy 3</Table.Cell>
          <Table.Cell>Female</Table.Cell>
          <Table.Cell>170</Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell>Total Character: 3</Table.HeaderCell>
          <Table.HeaderCell />
          <Table.HeaderCell>Total Height: 170cm (5ft/6.93in)</Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}

export default CharacterListSection;
