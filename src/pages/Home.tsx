import { Button, FormControl, Grid, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ContentPage from '../components/ContentPage';
import PokemonTypes from '../types/PokemonTypes';
import ListPokemon from '../components/ListPokemon';

const pokemon: PokemonTypes[] = [
  {
    cod: '#001',
    image: '/images/Eevee.png',
    name: 'Eevee',
    type: 'normal'
  },
  {
    cod: '#001',
    image: '/images/Eevee.png',
    name: 'Eevee',
    type: 'normal'
  },
  {
    cod: '#001',
    image: '/images/Eevee.png',
    name: 'Eevee',
    type: 'normal'
  },
  {
    cod: '#001',
    image: '/images/Eevee.png',
    name: 'Eevee',
    type: 'normal'
  },
  {
    cod: '#001',
    image: '/images/Eevee.png',
    name: 'Eevee',
    type: 'normal'
  },
  {
    cod: '#001',
    image: '/images/Eevee.png',
    name: 'Eevee',
    type: 'normal'
  },
  {
    cod: '#001',
    image: '/images/Eevee.png',
    name: 'Eevee',
    type: 'normal'
  },
  {
    cod: '#001',
    image: '/images/Eevee.png',
    name: 'Eevee',
    type: 'normal'
  },
  {
    cod: '#001',
    image: '/images/Eevee.png',
    name: 'Eevee',
    type: 'normal'
  },
  {
    cod: '#001',
    image: '/images/Eevee.png',
    name: 'Eevee',
    type: 'normal'
  },
  {
    cod: '#001',
    image: '/images/Eevee.png',
    name: 'Eevee',
    type: 'normal'
  },
  {
    cod: '#001',
    image: '/images/Eevee.png',
    name: 'Eevee',
    type: 'normal'
  },
  {
    cod: '#001',
    image: '/images/Eevee.png',
    name: 'Eevee',
    type: 'normal'
  },
  {
    cod: '#001',
    image: '/images/Eevee.png',
    name: 'Eevee',
    type: 'normal'
  }
];

const Home: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} textAlign={'center'}>
        <Typography variant="h4" fontWeight={700}>
          Pokédex
        </Typography>
      </Grid>
      <Grid item xs={12} textAlign={'center'}>
        <Typography variant="body1">Pesquise seu pokemon pelo nome ou pelo código da pokédex</Typography>
      </Grid>
      <Grid item xs={11}>
        <FormControl variant="outlined" fullWidth>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            startAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="start">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" sx={{ height: '100%' }}>
          <TuneOutlinedIcon />
        </Button>
      </Grid>
      <Grid item xs={12}>
        <ContentPage>
          <ListPokemon items={pokemon} />
        </ContentPage>
      </Grid>
    </Grid>
  );
};

export default Home;
