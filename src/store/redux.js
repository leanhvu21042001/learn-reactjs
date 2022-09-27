import { createStore } from "redux";
import pokemonReducer from "../reducers/pokemon";

const reduxStore = createStore(pokemonReducer);

export default reduxStore;
