import React from "react";
import "./App.css";
import HeaderSection from "./components/Header/header";
import DropdownSection from "./components/Dropdown/Dropdown";
import OpeningCrawlSection from "./components/OpeningCrawl/OpeningCrawl";
import CharacterListFilterSection from "./components/CharacterListFilter/CharacterListFilter";
import CharacterListSection from "./components/CharacterList/CharacterList";

function App() {
  const [loading, setLoading] = React.useState(true);
  const [moviesObject, setMoviesObject] = React.useState([]);
  const [moviesDropdownObject, setMoviesDropDownObject] = React.useState([]);
  const [selectedMovieId, setSelectedMovieId] = React.useState();
  const [openingCrawl, setOpeningCrawl] = React.useState("");

  React.useEffect(() => {
    let unmounted = false;
    async function getMovies() {
      const response = await fetch("https://swapi.dev/api/films");
      const body = await response.json();
      if (!unmounted) {
        setMoviesObject(body.results);
        setMoviesDropDownObject(
          body.results.map((movie) => {
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
    getMovies();
    return () => {
      unmounted = true;
    };
  }, []);

  function fetchMovieInformation(movieId) {
    const movie = moviesObject.find((x) => x.episode_id === movieId);

    if (movie !== undefined) {
      setOpeningCrawl(movie.opening_crawl);
    }
  }

  function handleSelectedMovieChange(newValue) {
    setSelectedMovieId(newValue);
    fetchMovieInformation(newValue);
  }

  return (
    <div className="app-container">
      <HeaderSection />
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
      <CharacterListFilterSection />
      <CharacterListSection />
    </div>
  );
}

export default App;
