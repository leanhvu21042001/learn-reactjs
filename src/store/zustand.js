import create from "zustand";

const useBearStore = create((set) => ({
  pokemons: [],
  filter: "",
  pokemonSelected: null,

  setPokemons: (pokemons) =>
    set((state) => ({
      ...state,
      pokemons,
    })),
  setFilter: (filter) =>
    set((state) => ({
      ...state,
      filter,
    })),
  setPokemonSelected: (pokemonSelected) =>
    set((state) => ({
      ...state,
      pokemonSelected,
    })),
}));

const pokemon_url = "http://localhost:3000/pokemon.json";

fetch(pokemon_url)
  .then((res) => res.json())
  .then((pokemons) =>
    useBearStore.setState((state) => ({
      ...state,
      pokemons,
    }))
  );

export default useBearStore;
