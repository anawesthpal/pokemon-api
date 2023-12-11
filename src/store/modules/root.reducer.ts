import { combineReducers } from "@reduxjs/toolkit";
import pokemonSlice from "./pokemon/pookemon.slice";
import pokemonsSlice from "./pokemons/pokemons.slice";

const rootReducer = combineReducers({
  pokemons: pokemonsSlice,
  pokemonDetalhes: pokemonSlice,
});

export default rootReducer;
