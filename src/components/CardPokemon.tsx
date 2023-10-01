import React, { useEffect, useState } from 'react';
import { Chip, Grid, Paper, Typography } from '@mui/material';
import PokemonTypes from '../types/PokemonTypes';
import colorType from '../utils/ColorType';

interface CardPokemonProps {
  pokemon: PokemonTypes;
}

const CardPokemon: React.FC<CardPokemonProps> = ({ pokemon }) => {
  const [color0, setColor0] = useState({ type: 'unknown', card: 'black', chip: 'pink' });
  const [color1, setColor1] = useState({ type: 'unknown', card: 'black', chip: 'pink' });

  useEffect(() => {
    const type0 = pokemon.types[0].type.name;
    const colorFind0 = colorType.find(item => item.type === type0);
    if (colorFind0) {
      setColor0(colorFind0);
    }
    if (pokemon.types[1]) {
      const type1 = pokemon.types[1].type.name;
      const colorFind1 = colorType.find(item => item.type === type1);
      if (colorFind1) {
        setColor1(colorFind1);
      }
    }
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper elevation={0} sx={{ backgroundColor: color0.card, textAlign: 'center' }}>
          <img src={pokemon.image} alt={pokemon.name} width={200} />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5">N°{pokemon.id}</Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Chip
          label={pokemon.types[0].type.name}
          sx={{ backgroundColor: color0.chip, minWidth: '80px', borderRadius: '8px', marginRight: '5px' }}
        />
        {pokemon.types[1] && (
          <Chip
            label={pokemon.types[1].type.name}
            sx={{ backgroundColor: color1.chip, minWidth: '80px', borderRadius: '8px' }}
          />
        )}
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
