import React from "react";
// import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Dropdown } from "semantic-ui-react";

function DropdownSection() {
  const [loading, setLoading] = React.useState(true);
  const [movies, setMovies] = React.useState([]);
  const [selectedMovieId, setSelectedMovieId] = React.useState();

  React.useEffect(() => {
    let unmounted = false;
    async function getMovies() {
      const response = await fetch("https://swapi.dev/api/films");
      const body = await response.json();
      if (!unmounted) {
        setMovies(
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

  return (
    <section className="dropdown">
      <p>Please select a movie from the dropdown for more information</p>
      <Dropdown
        placeholder="Select a movie"
        fluid
        selection
        options={movies}
        value={selectedMovieId}
        onChange={(e) => setSelectedMovieId(e.currentTarget.value)}
        loading={loading}
      />
    </section>
  );
}

export default DropdownSection;
