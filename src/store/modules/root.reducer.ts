import { combineReducers } from "@reduxjs/toolkit";
import pokedexSlice from "./pokedex/pokedexSlice";
import pokemonsReducer from "./pokedex/pokemon/pokemonSlice";

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  pokedex: pokedexSlice
});

export default rootReducer;