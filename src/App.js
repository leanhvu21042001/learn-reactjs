import React, { useContext, useEffect } from "react";

import PokemonInfo from "./components/PokemonInfo";
import PokemonTable from "./components/PokemonTable";
import PokemonFilter from "./components/PokemonFilter";

import { PokemonContext } from "./contexts/pokemonContextProvider";

import "./app.css";

const App = () => {
  const { setPokemons } = useContext(PokemonContext);

  useEffect(() => {
    const getPokemon = async () => {
      const pokemon_url = "http://localhost:3000/pokemon.json";
      const pokemonRes = await (await fetch(pokemon_url)).json();
      setPokemons(pokemonRes);
    };

    getPokemon();
  }, [setPokemons]);

  return (
    <div>
      <h3>Pokemon Search</h3>
      <div className="pokemon-search">
        <div>
          {/* Filter */}
          <PokemonFilter />

          {/* Display Pokemons */}
          <PokemonTable />
        </div>

        {/* Display Pokemon have seleted */}
        <PokemonInfo />
      </div>
    </div>
  );
};

export default App;
