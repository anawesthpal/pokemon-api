import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PokemonDetalhes } from "./pokemonsDetalhesSlice";

const URL = "https://pokeapi.co/api/v2";
const api = axios.create({
  baseURL: URL,
});

export const listarPorId = createAsyncThunk(
  "listarPorId",
  async (idnumber: number | string) => {
    try {
      const resposta = await api.get("/pokemon/", { params: { id: idnumber } });
      const retorno = resposta.data.results;
      const pokemon: PokemonDetalhes = {
        id: retorno.id,
        habilidades: retorno.abilities,
        imagemURL: retorno.sprites.front_shiny,
        nome: retorno.name,
        tamanho: retorno.height,
        // stats: retorno.stats
      };

      return pokemon;
    } catch {
      return null;
    }
  }
);
