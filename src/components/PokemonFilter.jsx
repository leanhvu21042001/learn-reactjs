import useBearStore from "../store/zustand";

const PokemonFilter = () => {
  const filter = useBearStore((state) => state.filter);
  const setFilter = useBearStore((state) => state.setFilter);

  const handleInputChange = ({ target: { value } }) => {
    setFilter(value);
  };

  return <input value={filter} onChange={handleInputChange} />;
};

export default PokemonFilter;
