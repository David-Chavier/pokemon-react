import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import PokemonTypes from '../../types/PokemonTypes';
import { RootState } from '../store';
import { doGet } from '../../services/pokemonApi';

const adapter = createEntityAdapter<PokemonTypes>({
  selectId: item => item.id
});

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.pokemons);

export const getPokemon = createAsyncThunk('pokemons/get', async (id: number) => {
  const response = await doGet(`/pokemon/${id}`);

  if (response.success) {
    const { data } = response;

    data.image = data.sprites.other['official-artwork'].front_default;

    return data;
  } else {
    console.log(response.trace);
  }
});

const sliceNameSlice = createSlice({
  name: 'pokemons',
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne
  },
  extraReducers(builder) {
    builder.addCase(getPokemon.fulfilled, (state, action) => {
      adapter.addOne(state, action.payload);
    });
  }
});

export const { addOne, addMany, updateOne } = sliceNameSlice.actions;
export default sliceNameSlice.reducer;
