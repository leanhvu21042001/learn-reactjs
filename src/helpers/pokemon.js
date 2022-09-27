/**
 *
 * @param {array} pokemons
 * @param {array} filter
 * @returns [] list of pokemons
 */
const filterByName = (pokemons, filter) => {
  return pokemons.filter(({ name: { english } }) =>
    english.toLowerCase().includes(filter.toLowerCase())
  );
};

export { filterByName };
