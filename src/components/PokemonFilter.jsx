import { useContext } from "react";

import { PokemonContext } from "../contexts/pokemonContextProvider";

const PokemonFilter = () => {
  const { filter, setFilter } = useContext(PokemonContext);
  <input value={filter} onChange={({ target }) => setFilter(target.value)} />;
};

export default PokemonFilter;
