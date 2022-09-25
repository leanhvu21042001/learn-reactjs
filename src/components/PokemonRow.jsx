import { useContext } from "react";

import { SET_SELECTED_POKEMON } from "../action-types/pokemon";
import { PokemonContext } from "../contexts/pokemonContextProvider";

const PokemonRow = ({ pokemon }) => {
  const { dispatch } = useContext(PokemonContext);

  return (
    <>
      <tr key={pokemon.id}>
        <td>{pokemon.name.english}</td>
        <td>{pokemon.type.join(", ")}</td>
        <td>
          <button
            onClick={() =>
              dispatch({
                type: SET_SELECTED_POKEMON,
                payload: pokemon,
              })
            }
          >
            More Information
          </button>
        </td>
      </tr>
    </>
  );
};
export default PokemonRow;
