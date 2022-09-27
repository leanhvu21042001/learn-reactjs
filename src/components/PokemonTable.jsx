import PokemonRow from "./PokemonRow";

import { filterByName } from "../helpers/pokemon";
import { useSelector } from "react-redux";

const combinePokemonRow = (pokemons) =>
  pokemons.map((pokemon) => <PokemonRow key={pokemon.id} pokemon={pokemon} />);

const PokemonTable = () => {
  const filter = useSelector((state) => state.filter);
  const pokemons = useSelector((state) => state.pokemons);

  const pokemonSliced = filterByName(pokemons, filter).slice(0, 20);
  const pokemonRows = combinePokemonRow(pokemonSliced);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>{pokemonRows}</tbody>
    </table>
  );
};

export default PokemonTable;
