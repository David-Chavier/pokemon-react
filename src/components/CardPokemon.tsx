import React, { useEffect, useState } from 'react';
import { Chip, Grid, Paper, Typography } from '@mui/material';
import PokemonTypes from '../types/PokemonTypes';
import colorType from '../utils/ColorType';

interface CardPokemonProps {
  pokemon: PokemonTypes;
}

const CardPokemon: React.FC<CardPokemonProps> = ({ pokemon }) => {
  const [color, setColor] = useState({ type: 'unknown', card: 'black', chip: 'pink' });

  useEffect(() => {
    const type = pokemon.types[0].type.name;
    const colorFind = colorType.find(item => item.type === type);

    if (colorFind) {
      setColor(colorFind);
    }
  }, [pokemon]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper elevation={0} sx={{ backgroundColor: color.card, textAlign: 'center' }}>
          <img src={pokemon.image} alt={pokemon.name} width={200} />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h5">#{pokemon.id}</Typography>
      </Grid>
      <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Chip label={pokemon.types[0].type.name} sx={{ backgroundColor: color.chip, minWidth: '80px' }} />
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
