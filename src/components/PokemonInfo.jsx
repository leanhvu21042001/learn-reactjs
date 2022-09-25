import { useContext } from "react";

import { PokemonContext } from "../contexts/pokemonContextProvider";

const PokemonInfo = () => {
  const {
    state: { pokemonSelected },
  } = useContext(PokemonContext);

  return (
    pokemonSelected && (
      <div>
        <h2>{pokemonSelected.name.english}</h2>
        <table>
          <tbody>
            {Object.keys(pokemonSelected.base).map((key) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{pokemonSelected.base[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
};

export default PokemonInfo;
