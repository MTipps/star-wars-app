import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "@reduxjs/toolkit/src/devtoolsExtension";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

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
      console.log("data");
      console.log(data);
      return data;
    })
    .catch((err) => console.log(err));
}

const movieReducer = (state = initialState, action) => {
  if (action.type === "movies") {
    return {
      moviesObject: action.payload,
    };
  }

  if (action.type === "newMovieId") {
    return {
      selectedMovieId: action.newMovieId,
    };
  }

  return state;
};

export async function fetchMovies(dispatch, getState) {
  const response = await requestSwapiData(`${rootSwapiUrl}films`);
  const stateBefore = getState();
  console.log("state before:");
  console.log(stateBefore);
  dispatch({ type: "movies", payload: response.results });
  const stateAfter = getState();
  console.log("state after:");
  console.log(stateAfter);
}

const store = createStore(movieReducer, composedEnhancer);

export default store;
