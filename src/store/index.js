import { createStore } from "redux";

const selectedMovieReducer = (state = { selectedMovieId: 0 }, action) => {
  if (action.type === "newMovieId") {
    return {
      selectedMovieId: action.newMovieId,
    };
  }

  return state;
};

const store = createStore(selectedMovieReducer);

export default store;
