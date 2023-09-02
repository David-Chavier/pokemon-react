import React from 'react';
import PokemonTypes from '../types/PokemonTypes';
import { Grid } from '@mui/material';
import CardPokemon from './CardPokemon';

interface ListPokemonProps {
  items: PokemonTypes[];
}

const ListPokemon: React.FC<ListPokemonProps> = ({ items }) => {
  return (
    <Grid container spacing={2}>
      {items.map(item => (
        <Grid item xs={12} sm={3} key={item.cod}>
          <CardPokemon pokemon={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListPokemon;
