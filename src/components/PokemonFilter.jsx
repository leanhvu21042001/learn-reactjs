import { useDispatch, useSelector } from "react-redux";

import { SET_FILTER } from "../action-types/pokemon";

const PokemonFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleInputChange = ({ target }) => {
    dispatch({
      type: SET_FILTER,
      payload: target.value,
    });
  };

  return <input value={filter} onChange={handleInputChange} />;
};

export default PokemonFilter;
