import React from 'react';
import { Chip, Grid, Paper, Typography } from '@mui/material';
import PokemonTypes from '../types/PokemonTypes';

interface CardPokemonProps {
  pokemon: PokemonTypes;
}

const CardPokemon: React.FC<CardPokemonProps> = ({ pokemon }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper elevation={0}>
          <img src={pokemon.image} alt={pokemon.name} width={200} />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h5">{pokemon.cod}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Chip label={pokemon.type} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4">{pokemon.name}</Typography>
      </Grid>
    </Grid>
  );
};

export default CardPokemon;
