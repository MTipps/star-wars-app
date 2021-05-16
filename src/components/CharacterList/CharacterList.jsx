import React from "react";
import { Table } from "semantic-ui-react";

function CharacterListSection(props) {
  const properties = props;
  // const nameSort = "asc";
  // const genderSort = "asc";
  // const heightSort = "asc";
  // let sortBy = {
  //   column: "",
  //   order: "",
  // };
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

    function filterCharacters(characters) {
      return properties.characterFilter === "all"
        ? characters
        : characters.filter((x) => x.gender === properties.characterFilter);
    }

    function sortCharacters(characters) {
      return characters.sort((a, b) => a.name - b.name);
    }

    if (selectedMovie.characters !== undefined) {
      let movieCharacterArray = [];

      selectedMovie.characters.forEach(function (character) {
        const characterObject = allCharacters.find((x) => x.url === character);

        if (characterObject !== undefined) {
          movieCharacterArray.push(characterObject);
        }
      });

      movieCharacterArray = filterCharacters(movieCharacterArray);
      movieCharacterArray = sortCharacters(movieCharacterArray);

      setMovieCharacters(movieCharacterArray);
      setHeightTotalText(getCharacterHeights(movieCharacterArray));
    }
  }, [properties.selectedMovie, properties.characterFilter]);

  function sortByName() {
    console.log("SortByName");
  }

  function sortByGender() {
    console.log("SortByGender");
  }

  function sortByHeight() {
    console.log("SortByHeight");
  }

  return (
    <section>
      {movieCharacters.length === 0 ? (
        <p>No Data</p>
      ) : (
        <Table columns={3} striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell onClick={sortByName}>Name</Table.HeaderCell>
              <Table.HeaderCell onClick={sortByGender}>Gender</Table.HeaderCell>
              <Table.HeaderCell onClick={sortByHeight}>Height</Table.HeaderCell>
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
