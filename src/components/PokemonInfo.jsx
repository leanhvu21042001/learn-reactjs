import { useSelector } from "react-redux";

const PokemonInfo = () => {
  const pokemonSelected = useSelector((state) => state.pokemonSelected);

  return (
    pokemonSelected && (
      <div>
        <h2>{pokemonSelected.name.english}</h2>
        <table>
          <tbody>
            {Object.keys(pokemonSelected.base).map((key) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{pokemonSelected.base[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
};

export default PokemonInfo;
