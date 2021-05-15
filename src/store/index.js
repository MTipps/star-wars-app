import { createStore } from "redux";

const initialState = {
  moviesObject: {},
  selectedMovieId: 0,
};

const rootSwapiUrl = "https://swapi.dev/api/";

function requestSwapiData(url) {
  return fetch(url)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
}

const movieReducer = (state = initialState, action) => {
  if (action.type === "getMovies") {
    requestSwapiData(`${rootSwapiUrl}films`).then((data) => {
      console.log(data);
    });
  }

  if (action.type === "newMovieId") {
    return {
      selectedMovieId: action.newMovieId,
    };
  }

  return state;
};

const store = createStore(movieReducer);

export default store;
