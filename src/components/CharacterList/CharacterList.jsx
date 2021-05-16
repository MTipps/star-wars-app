import React from "react";
import { Table } from "semantic-ui-react";

function CharacterListSection(props) {
  const properties = props;
  const [movieCharacters, setMovieCharacters] = React.useState([]);
  const [heightTotalText, setHeightTotalText] = React.useState("");

  React.useEffect(() => {
    const { selectedMovie } = properties;
    const allCharacters = properties.charactersObject;

    if (selectedMovie.characters !== undefined) {
      const movieCharacterArray = [];
      let heightCmTotal = 0;

      selectedMovie.characters.forEach(function (character) {
        const characterObject = allCharacters.find((x) => x.url === character);
        if (characterObject !== undefined) {
          console.log(characterObject);
          heightCmTotal += parseInt(characterObject.height, 10);
          movieCharacterArray.push(characterObject);
        }
      });

      let inches = (heightCmTotal * 0.393700787).toFixed(0);
      const feet = Math.floor(inches / 12);
      inches %= 12;

      setHeightTotalText(`${heightCmTotal}cm (${feet}ft / ${inches}in)`);
      setMovieCharacters(movieCharacterArray);
    }
  }, [properties.selectedMovie]);

  return (
    <Table columns={3} striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Gender</Table.HeaderCell>
          <Table.HeaderCell>Height</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {movieCharacters.map(function (character) {
          return (
            <Table.Row>
              <Table.Cell>{character.name}</Table.Cell>
              <Table.Cell>{character.gender}</Table.Cell>
              <Table.Cell>{character.height}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell>
            Total Characters: {movieCharacters.length}
          </Table.HeaderCell>
          <Table.HeaderCell />
          <Table.HeaderCell>Total Height: {heightTotalText}</Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}

export default CharacterListSection;
