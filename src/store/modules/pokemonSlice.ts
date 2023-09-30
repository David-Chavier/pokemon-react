import { createSlice } from '@reduxjs/toolkit';
import PokemonTypes from '../../types/PokemonTypes';

const initialState = {} as PokemonTypes;

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
  }
});

export const { create, clear } = pokemonSlice.actions;
export default pokemonSlice.reducer;
