import { useContext } from "react";

import PokemonRow from "./PokemonRow";

import { filterByName } from "../helpers/pokemon";
import { PokemonContext } from "../contexts/pokemonContextProvider";

const CombinePokemonRow = (pokemons, setPokemonSelected) =>
  pokemons.map((pokemon) => (
    <PokemonRow
      key={pokemon.id}
      pokemon={pokemon}
      onClick={(pokemon) => setPokemonSelected(pokemon)}
    />
  ));

const PokemonTable = () => {
  const { filter, pokemons, setSelectedItem } = useContext(PokemonContext);

  const pokemonsFiltered = filterByName(pokemons, filter);
  const pokemonSliced = pokemonsFiltered.slice(0, 20);

  const pokemonRows = CombinePokemonRow(pokemonSliced, setSelectedItem);

  return (
    <table width="100%">
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
