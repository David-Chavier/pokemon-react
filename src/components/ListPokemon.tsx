import React from 'react';
import { Grid, Typography } from '@mui/material';
import CardPokemon from './CardPokemon';
import { useSelector } from 'react-redux';
import { selectAll } from '../store/modules/pokemonsSlice';

const ListPokemon: React.FC = () => {
  const pokemonsRedux = useSelector(selectAll);

  if (!pokemonsRedux.length) {
    return <Typography>Nenhum pokemon para listar</Typography>;
  }

  return (
    <Grid container spacing={4}>
      {pokemonsRedux.map(item => (
        <Grid item xs={12} sm={6} md={3} key={item.id}>
          <CardPokemon pokemon={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListPokemon;
