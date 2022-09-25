import React, { useCallback, useContext, useEffect } from "react";

import PokemonInfo from "./components/PokemonInfo";
import PokemonTable from "./components/PokemonTable";
import PokemonFilter from "./components/PokemonFilter";

import { SET_POKEMONS } from "./action-types/pokemon";
import { PokemonContext } from "./contexts/pokemonContextProvider";

import "./app.css";

const App = () => {
  const { dispatch } = useContext(PokemonContext);

  const getPokemon = useCallback(async () => {
    const pokemon_url = "http://localhost:3000/pokemon.json";
    const pokemonsRes = await (await fetch(pokemon_url)).json();
    dispatch({
      type: SET_POKEMONS,
      payload: pokemonsRes,
    });
  }, [dispatch]);

  useEffect(() => {
    getPokemon();
  }, [getPokemon]);

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
