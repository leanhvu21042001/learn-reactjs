import { createContext, useReducer } from "react";
import pokemonReducer from "../reducers/pokemon";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, {
    pokemons: [],
    filter: "",
    pokemonSelected: null,
  });

  return (
    <PokemonContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
