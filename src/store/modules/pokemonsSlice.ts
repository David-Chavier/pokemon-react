import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import PokemonTypes from '../../types/PokemonTypes';
import { RootState } from '../store';

const adapter = createEntityAdapter<PokemonTypes>({
  selectId: item => item.cod
});

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.pokemons);

const sliceNameSlice = createSlice({
  name: 'pokemons',
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne
  }
});

export const { addOne, addMany, updateOne } = sliceNameSlice.actions;
export default sliceNameSlice.reducer;
