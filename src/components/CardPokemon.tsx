import React from 'react';
import { Chip, Grid, Paper, Typography } from '@mui/material';
import PokemonTypes from '../types/PokemonTypes';
import colorType from '../utils/ColorType';

interface CardPokemonProps {
  pokemon: PokemonTypes;
}

const CardPokemon: React.FC<CardPokemonProps> = ({ pokemon }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper elevation={0} sx={{ backgroundColor: colorType[pokemon.type].card, textAlign: 'center' }}>
          <img src={pokemon.image} alt={pokemon.name} width={200} />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h5">{pokemon.cod}</Typography>
      </Grid>
      <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Chip label={pokemon.type} sx={{ backgroundColor: colorType[pokemon.type].chip, minWidth: '80px' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" fontWeight={700}>
          {pokemon.name}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CardPokemon;
