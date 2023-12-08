import { combineReducers } from "@reduxjs/toolkit";
import pokedexSlice from "./pokedex/pokedex.slice";
import pokemonsReducer from "./pokemons/pokemons.slice";

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  pokedex: pokedexSlice
});

export default rootReducer;