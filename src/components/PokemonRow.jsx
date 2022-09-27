import useBearStore from "../store/zustand";

const PokemonRow = ({ pokemon }) => {
  const setPokemonSelected = useBearStore((state) => state.setPokemonSelected);

  return (
    <>
      <tr key={pokemon.id}>
        <td>{pokemon.name.english}</td>
        <td>{pokemon.type.join(", ")}</td>
        <td>
          <button onClick={() => setPokemonSelected(pokemon)}>More Information</button>
        </td>
      </tr>
    </>
  );
};
export default PokemonRow;
