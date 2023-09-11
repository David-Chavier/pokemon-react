import { Button, FormControl, Grid, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ContentPage from '../components/ContentPage';
import ListPokemon from '../components/ListPokemon';
import { useAppDispatch } from '../store/hooks';
import { getPokemon } from '../store/modules/pokemonsSlice';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  function getRandomInt(max: number) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - 1) + 1);
  }

  useEffect(() => {
    dispatch(getPokemon(getRandomInt(1281)));
  }, []);
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
      <Grid item xs={10} md={11}>
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
      <Grid item xs={2} md={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" sx={{ height: '100%' }}>
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
