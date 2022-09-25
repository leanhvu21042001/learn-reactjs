const PokemonRow = ({ pokemon, onClick }) => (
  <>
    <tr key={pokemon.id}>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <button onClick={() => onClick(pokemon)}>More Information</button>
      </td>
    </tr>
  </>
);

export default PokemonRow;
