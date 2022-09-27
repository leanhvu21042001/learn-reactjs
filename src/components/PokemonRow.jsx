import { useDispatch } from "react-redux";

import { SET_SELECTED_POKEMON } from "../action-types/pokemon";

const PokemonRow = ({ pokemon }) => {
  const dispatch = useDispatch();

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
