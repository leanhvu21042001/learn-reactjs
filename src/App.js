import React from "react";

import PokemonInfo from "./components/PokemonInfo";
import PokemonTable from "./components/PokemonTable";
import PokemonFilter from "./components/PokemonFilter";

import "./app.css";
import { Grid, Typography, Box } from "@mui/material";

const App = () => (
  <Box className="app">
    <Typography variant="h1">Pokemon Search</Typography>
    <Grid container className="pokemon-search">
      <Grid item xs={8}>
        {/* Filter */}
        <PokemonFilter />

        {/* Display Pokemons */}
        <PokemonTable />
      </Grid>

      <Grid item xs={4}>
        {/* Display Pokemon have seleted */}
        <PokemonInfo />
      </Grid>
    </Grid>
  </Box>
);

export default App;
