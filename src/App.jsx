import React from "react";
import { Container } from "semantic-ui-react";

import "./App.css";

import DropdownSection from "./components/Dropdown/Dropdown";
import OpeningCrawlSection from "./components/OpeningCrawl/OpeningCrawl";
import CharacterListFilterSection from "./components/CharacterListFilter/CharacterListFilter";
import CharacterListSection from "./components/CharacterList/CharacterList";

function App() {
  const [loading, setLoading] = React.useState(true);
  const [moviesObject, setMoviesObject] = React.useState([]);
  const [moviesDropdownObject, setMoviesDropDownObject] = React.useState([]);
  const [selectedMovieId, setSelectedMovieId] = React.useState();
  const [selectedMovie, setSelectedMovie] = React.useState({});
  const [openingCrawl, setOpeningCrawl] = React.useState("");
  const [characterFilter, setCharacterFilter] = React.useState("all");
  const [charactersObject, setCharactersObject] = React.useState([]);

  React.useEffect(() => {
    let unmounted = false;
    async function getMovies() {
      const response = await fetch("https://swapi.dev/api/films");
      const body = await response.json();

      if (!unmounted) {
        const sortMoviesByReleaseDate = body.results
          .slice()
          .sort(
            (a, b) => Date.parse(a.release_date) - Date.parse(b.release_date)
          );

        setMoviesObject(sortMoviesByReleaseDate);

        setMoviesDropDownObject(
          sortMoviesByReleaseDate.map((movie) => {
            return {
              key: movie.episode_id,
              text: movie.title,
              value: movie.episode_id,
            };
          })
        );

        setLoading(false);
      }
    }

    async function getCharacters() {
      const response = await fetch("https://swapi.dev/api/people");
      const body = await response.json();
      if (!unmounted) {
        setCharactersObject(body.results);
        setLoading(false);
      }
    }

    getMovies();
    getCharacters();

    return () => {
      unmounted = true;
    };
  }, []);

  function fetchMovieInformation(movieId) {
    const movie = moviesObject.find((x) => x.episode_id === movieId);
    if (movie !== undefined) {
      setSelectedMovie(movie);
      setOpeningCrawl(movie.opening_crawl);
    }
  }

  function handleSelectedMovieChange(newValue) {
    setSelectedMovieId(newValue);
    fetchMovieInformation(newValue);
  }

  function handleCharacterFilterChange(newValue) {
    setCharacterFilter(newValue);
  }

  // Sets the number of stars we wish to display
  const numStars = 100;

  // Gets random x, y values based on the size of the container
  function getRandomPosition() {
    const y = window.innerWidth;
    const x = window.innerHeight;
    const randomX = Math.floor(Math.random() * x);
    const randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
  }

  // For every star we want to display
  for (let i = 0; i < numStars; i += 1) {
    const star = document.createElement("div");
    star.className = "app-container__star";
    const xy = getRandomPosition();
    star.style.top = `${xy[0]}px`;
    star.style.left = `${xy[1]}px`;
    document.body.append(star);
  }

  return (
    <div className="app-container">
      <Container fluid>
        <DropdownSection
          loadingState={loading}
          movies={moviesDropdownObject}
          selectedMovieId={selectedMovieId}
          onChange={handleSelectedMovieChange}
        />
        <OpeningCrawlSection
          selectedMovieId={selectedMovieId}
          openingCrawl={openingCrawl}
        />
        {selectedMovieId !== undefined && (
          <div className="characterList">
            <CharacterListFilterSection
              characterFilter={characterFilter}
              onChange={handleCharacterFilterChange}
            />
            <CharacterListSection
              charactersObject={charactersObject}
              selectedMovie={selectedMovie}
              characterFilter={characterFilter}
            />
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;
