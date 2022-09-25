import {
  SET_FILTER,
  SET_POKEMONS,
  SET_SELECTED_POKEMON,
} from "../action-types/pokemon";

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case SET_SELECTED_POKEMON:
      return {
        ...state,
        pokemonSelected: action.payload,
      };
    default:
      throw new Error("No action");
  }
};

export default pokemonReducer;
