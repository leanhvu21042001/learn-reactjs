import { Button } from "@mui/material";
import { observer } from "mobx-react";

import mobxStore from "../store/mobx";

const PokemonRow = ({ pokemon }) => (
  <tr key={pokemon.id}>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <Button
        variant="outlined"
        onClick={() => mobxStore.setPokemonSelected(pokemon)}
      >
        More Information
      </Button>
    </td>
  </tr>
);
export default observer(PokemonRow);
