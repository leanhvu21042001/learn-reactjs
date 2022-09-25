import { useContext } from "react";

import { SET_FILTER } from "../action-types/pokemon";
import { PokemonContext } from "../contexts/pokemonContextProvider";

const PokemonFilter = () => {
  const {
    state: { filter },
    dispatch,
  } = useContext(PokemonContext);
  return (
    <input
      value={filter}
      onChange={({ target }) =>
        dispatch({
          type: SET_FILTER,
          payload: target.value,
        })
      }
    />
  );
};

export default PokemonFilter;
