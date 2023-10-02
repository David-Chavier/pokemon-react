import { Button, FormControl, Grid, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ContentPage from '../components/ContentPage';
import ListPokemon from '../components/ListPokemon';
import { useAppDispatch } from '../store/hooks';
import { deleteAll, getPokemons } from '../store/modules/pokemonsSlice';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const [pokemon, setPokemon] = useState<string | number>();

  function getRandomInt(max: number) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - 1) + 1);
  }

  useEffect(() => {
    dispatch(deleteAll());
    for (let index = 0; index < 8; index++) {
      dispatch(getPokemons(getRandomInt(1017)));
    }
  }, []);

  function getPokemonByIdOrName() {
    if (!pokemon) {
      dispatch(deleteAll());
      for (let index = 0; index < 8; index++) {
        dispatch(getPokemons(getRandomInt(1017)));
      }
    } else {
      dispatch(deleteAll());
      dispatch(getPokemons(pokemon));
    }
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} textAlign={'center'}>
        <Typography variant="h4" fontWeight={700}>
          My Pokédex
        </Typography>
      </Grid>
      <Grid item xs={12} textAlign={'center'}>
        <Typography variant="body1">Pesquise seu pokemon pelo nome ou pelo código da pokédex</Typography>
      </Grid>
      <Grid item xs={10} md={11}>
        <FormControl variant="outlined" fullWidth>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            onChange={e => setPokemon(e.target.value.toLowerCase())}
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
      <Grid item xs={2} md={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" sx={{ height: '100%' }} onClick={getPokemonByIdOrName}>
          <TuneOutlinedIcon />
        </Button>
      </Grid>
      <Grid item xs={12}>
        <ContentPage>
          <ListPokemon />
        </ContentPage>
      </Grid>
    </Grid>
  );
};

export default Home;
