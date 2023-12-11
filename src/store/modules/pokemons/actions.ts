import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PokemonSumario } from "./pokemons.slice";

const URL = "https://pokeapi.co/api/v2";
const api = axios.create({
  baseURL: URL,
});

export const listarPokemons = createAsyncThunk(
  "listarTodosPokemons",
  async (offsetnumero: number) => {
    try {
      const respostaPokemon = await api.get("/pokemon", {
        params: { limit: 20, offset: offsetnumero },
      });
      const pokemons: PokemonSumario[] = [];
      for (const pokemon of respostaPokemon.data.results) {
        const responseDetail = await api.get(pokemon.url);
        pokemons.push({
          id: responseDetail.data.id,
          nome: responseDetail.data.name,
          altura: responseDetail.data.height,
          largura: responseDetail.data.weight,
          imagemURL:
            responseDetail.data.sprites.other.dream_world.front_default,
          detalhesURL: pokemon.url,
          favorito: false,
        });
      }

      return {
        count: respostaPokemon.data.count,
        next: respostaPokemon.data.next,
        previous: respostaPokemon.data.previous,
        pokemons: pokemons,
      };
    } catch {
      return null;
    }
  }
);