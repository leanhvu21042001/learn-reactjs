import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [filter, setFilter] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [selectedItem, setSelectedItem] = useState(undefined);

  const value = {
    filter,
    pokemons,
    selectedItem,
    setFilter,
    setPokemons,
    setSelectedItem,
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};
