import React from "react";
import { Table } from "semantic-ui-react";

function CharacterListSection(props) {
  const properties = props;
  const [movieCharacters, setMovieCharacters] = React.useState([]);
  const [heightTotalText, setHeightTotalText] = React.useState("");

  React.useEffect(() => {
    const { selectedMovie } = properties;
    const allCharacters = properties.charactersObject;

    function getCharacterHeights(characters) {
      const totalCm = characters.reduce(
        (a, b) => a + parseInt(b.height, 10),
        0
      );
      let inches = (totalCm * 0.393700787).toFixed(0);
      const feet = Math.floor(inches / 12);
      inches %= 12;

      return `${totalCm}cm (${feet}ft / ${inches}in)`;
    }

    if (selectedMovie.characters !== undefined) {
      let movieCharacterArray = [];

      selectedMovie.characters.forEach(function (character) {
        const characterObject = allCharacters.find((x) => x.url === character);

        if (characterObject !== undefined) {
          movieCharacterArray.push(characterObject);
        }
      });

      movieCharacterArray =
        properties.characterFilter === "all"
          ? movieCharacterArray
          : movieCharacterArray.filter(
              (x) => x.gender === properties.characterFilter
            );
      setMovieCharacters(movieCharacterArray);
      setHeightTotalText(getCharacterHeights(movieCharacterArray));
    }
  }, [properties.selectedMovie, properties.characterFilter]);

  return (
    <section>
      {movieCharacters.length === 0 ? (
        <p>No Data</p>
      ) : (
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
              <Table.HeaderCell>
                Total Height: {heightTotalText}
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      )}
    </section>
  );
}

export default CharacterListSection;
