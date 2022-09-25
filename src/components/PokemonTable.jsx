import { useContext, useMemo } from "react";

import PokemonRow from "./PokemonRow";

import { filterByName } from "../helpers/pokemon";
import { PokemonContext } from "../contexts/pokemonContextProvider";

const CombinePokemonRow = (pokemons) =>
  pokemons.map((pokemon) => <PokemonRow key={pokemon.id} pokemon={pokemon} />);

const PokemonTable = () => {
  const {
    state: { filter, pokemons },
  } = useContext(PokemonContext);

  const pokemonsFiltered = useMemo(
    () => filterByName(pokemons, filter),
    [filter, pokemons]
  );

  const pokemonSliced = useMemo(
    () => pokemonsFiltered.slice(0, 20),
    [pokemonsFiltered]
  );

  const pokemonRows = useMemo(
    () => CombinePokemonRow(pokemonSliced),
    [pokemonSliced]
  );

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
