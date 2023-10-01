import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import PokemonTypes from '../../types/PokemonTypes';
import { doGet } from '../../services/pokemonApi';

const initialState = {} as PokemonTypes;

export const getPokemon = createAsyncThunk('pokemons/get', async (idOrName: number | string) => {
  const response = await doGet(`/pokemon/${idOrName}`);

  if (response.success) {
    const { data } = response;

    data.image = data.sprites.other['official-artwork'].front_default;

    return data;
  } else {
    console.log(response.trace);
    throw new Error('Erro ao buscar o Pokémon');
  }
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    create(state, action) {
      return (state = action.payload);
    },
    clear() {
      return initialState;
    }
  },
  extraReducers(builder) {
    builder.addCase(getPokemon.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  }
});

export const { create, clear } = pokemonSlice.actions;
export default pokemonSlice.reducer;
