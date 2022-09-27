import { observer } from "mobx-react";

import mobxStore from "../store/mobx";

const PokemonRow = ({ pokemon }) => (
  <tr key={pokemon.id}>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <button onClick={() => mobxStore.setPokemonSelected(pokemon)}>
        More Information
      </button>
    </td>
  </tr>
);
export default observer(PokemonRow);
