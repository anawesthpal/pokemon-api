import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Stat } from "./pookemon.slice";

export const listarPorId = createAsyncThunk(
  "listarPorId",
  async (idnumber: number | string) => {
    try {
      const resposta = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${idnumber}/`
      );

      const habilidades: Array<string> = [];
      const stats: Stat[] = [];

      for (const item of resposta.data.abilities) {
        habilidades.push(item.ability.name);
      }

      for (const item of resposta.data.stats) {
        stats.push({
          nome: item.stat.name,
          baseStat: item.base_stat,
        });
      }

      return {
        isLoading: false,
        id: resposta.data.id,
        nome: resposta.data.name,
        imagemURL: resposta.data.sprites.other.dream_world.front_default,
        habilidades: habilidades,
        stats: stats,
        altura: resposta.data.height,
        largura: resposta.data.weight,
      };
    } catch {
      return null;
    }
  }
);
