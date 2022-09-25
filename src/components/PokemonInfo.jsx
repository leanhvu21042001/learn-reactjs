import { useContext } from "react";

import { PokemonContext } from "../contexts/pokemonContextProvider";

const PokemonInfo = () => {
  const { selectedItem } = useContext(PokemonContext);

  return (
    selectedItem && (
      <div>
        <h2>{selectedItem.name.english}</h2>
        <table>
          <tbody>
            {Object.keys(selectedItem.base).map((key) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{selectedItem.base[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
};

export default PokemonInfo;
