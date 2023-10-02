import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import colorType from '../utils/ColorType';
import { Button, Chip, Grid, Paper, Typography } from '@mui/material';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import { getPokemon } from '../store/modules/pokemonSlice';
import TableStatsPokemon from '../components/TableStatsPokemon';

const Detail: React.FC = () => {
  const dispatch = useAppDispatch();
  const pokemonRedux = useAppSelector(state => state.pokemon);
  console.log(pokemonRedux);

  const [color0, setColor0] = useState({ type: 'unknown', card: 'black', chip: 'pink' });
  const [color1, setColor1] = useState({ type: 'unknown', card: 'black', chip: 'pink' });

  useEffect(() => {
    const type0 = pokemonRedux.types[0].type.name;
    const colorFind0 = colorType.find(item => item.type === type0);
    if (colorFind0) {
      setColor0(colorFind0);
    }
    if (pokemonRedux.types[1]) {
      const type1 = pokemonRedux.types[1].type.name;
      const colorFind1 = colorType.find(item => item.type === type1);
      if (colorFind1) {
        setColor1(colorFind1);
      }
    }
  }, []);

  function backPokemon() {
    dispatch(getPokemon(pokemonRedux.id - 1));
  }
  function nextPokemon() {
    dispatch(getPokemon(pokemonRedux.id + 1));
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
        <Grid container sx={{ justifyContent: 'center' }}>
          <Grid item>
            <Typography variant="h5" sx={{ fontSize: '3rem', fontWeight: 700, margin: '0 2rem 0 2rem' }}>
              {pokemonRedux.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" sx={{ fontSize: '3rem', fontWeight: 700 }}>
              N°{pokemonRedux.id}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Grid container>
          <Grid item xs={12}>
            <TableStatsPokemon
              hp={pokemonRedux.stats[0].base_stat}
              attack={pokemonRedux.stats[1].base_stat}
              defense={pokemonRedux.stats[2].base_stat}
              specialAttack={pokemonRedux.stats[3].base_stat}
              specialDefense={pokemonRedux.stats[4].base_stat}
              speed={pokemonRedux.stats[5].base_stat}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: '#ee6b2f',
              marginTop: '2rem',
              borderRadius: '0.3rem',
              height: '12rem',
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Grid container>
              <Grid item xs={12}>
                <Grid container sx={{ padding: '40px' }}>
                  <Grid item xs={6}>
                    <Typography sx={{ color: 'white' }}>Height</Typography>
                    <Typography>{pokemonRedux.height / 10} m</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={{ color: 'white' }}>Weight</Typography>
                    <Typography>{pokemonRedux.weight / 10} kg</Typography>
                  </Grid>
                  <Grid item xs={6} sx={{ marginTop: '20px' }}>
                    <Typography sx={{ color: 'white' }}>Abilities</Typography>
                    <Typography>1° {pokemonRedux.abilities[0].ability.name}</Typography>
                    {pokemonRedux.abilities[1] && <Typography>2° {pokemonRedux.abilities[1].ability.name}</Typography>}
                    {pokemonRedux.abilities[2] && <Typography>3° {pokemonRedux.abilities[2].ability.name}</Typography>}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Paper elevation={0} sx={{ backgroundColor: color0.card, textAlign: 'center', border: '2px solid #e3350d' }}>
          <img src={pokemonRedux.image} alt={pokemonRedux.name} width="90%" />
        </Paper>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="h5"></Typography>
      </Grid>
      <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5px' }}>
        <Chip
          label={pokemonRedux.types[0].type.name}
          sx={{ backgroundColor: color0.chip, minWidth: '80px', borderRadius: '8px', marginRight: '5px' }}
        />
        {pokemonRedux.types[1] && (
          <Chip
            label={pokemonRedux.types[1].type.name}
            sx={{ backgroundColor: color1.chip, minWidth: '80px', borderRadius: '8px' }}
          />
        )}
      </Grid>

      <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
        <Grid item>
          <Button onClick={backPokemon}>
            <ArrowCircleLeftRoundedIcon
              sx={{ fontSize: '4rem', cursor: 'pointer', ':hover': { fontSize: '4.2rem' } }}
            />
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={nextPokemon}>
            <ArrowCircleRightRoundedIcon
              sx={{ fontSize: '4rem', cursor: 'pointer', ':hover': { fontSize: '4.2rem' } }}
            />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Detail;
