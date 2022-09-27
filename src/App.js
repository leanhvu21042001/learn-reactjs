import React from "react";

import PokemonInfo from "./components/PokemonInfo";
import PokemonTable from "./components/PokemonTable";
import PokemonFilter from "./components/PokemonFilter";

import "./app.css";

const App = () => (
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

export default App;
