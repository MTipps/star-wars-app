import React, { useCallback } from "react";
import { Table } from "semantic-ui-react";

function CharacterListSection(props) {
  const properties = props;
  const [movieCharacters, setMovieCharacters] = React.useState([]);
  const [heightTotalText, setHeightTotalText] = React.useState("");
  const [nameSortDirection, setNameSortDirection] = React.useState("ascending");
  const [genderSortDirection, setGenderSortDirection] =
    React.useState("ascending");
  const [heightSortDirection, setHeightSortDirection] =
    React.useState("ascending");

  const changeSortOrder = useCallback(async (columnName) => {
    let sortedCharacters;

    switch (columnName) {
      case "name":
        setNameSortDirection(
          nameSortDirection === "ascending" ? "descending" : "ascending"
        );
        sortedCharacters =
          nameSortDirection === "ascending"
            ? movieCharacters.sort((a, b) => (a.name > b.name ? 1 : -1))
            : movieCharacters.reverse();
        break;
      case "gender":
        setGenderSortDirection(
          genderSortDirection === "ascending" ? "descending" : "ascending"
        );
        sortedCharacters =
          genderSortDirection === "ascending"
            ? movieCharacters.sort((a, b) => (a.gender > b.gender ? 1 : -1))
            : movieCharacters.reverse();
        break;
      case "height":
        setHeightSortDirection(
          heightSortDirection === "ascending" ? "descending" : "ascending"
        );
        sortedCharacters =
          heightSortDirection === "ascending"
            ? movieCharacters.sort((a, b) => (a.height > b.height ? 1 : -1))
            : movieCharacters.reverse();
        break;
      default:
        sortedCharacters = movieCharacters;
    }
    setMovieCharacters(sortedCharacters);
  });

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

    if (selectedMovie.characters !== undefined) {
      let movieCharacterArray = [];

      selectedMovie.characters.forEach(function filterOutUndefined(character) {
        const characterObject = allCharacters.find((x) => x.url === character);

        if (characterObject !== undefined) {
          movieCharacterArray.push(characterObject);
        }
      });

      movieCharacterArray = filterCharacters(movieCharacterArray);

      setMovieCharacters(movieCharacterArray);
      setHeightTotalText(getCharacterHeights(movieCharacterArray));
    }
  }, [properties.selectedMovie, properties.characterFilter]);

  return (
    <section>
      {movieCharacters.length === 0 ? (
        <p>No Data</p>
      ) : (
        <Table columns={3} striped inverted selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell onClick={() => changeSortOrder("name")}>
                Name
              </Table.HeaderCell>
              <Table.HeaderCell onClick={() => changeSortOrder("gender")}>
                Gender
              </Table.HeaderCell>
              <Table.HeaderCell onClick={() => changeSortOrder("height")}>
                Height
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {movieCharacters.map(function showEachCharacter(character) {
              return (
                <Table.Row key={character.name}>
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
