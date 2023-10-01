import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import CardPokemon from './CardPokemon';
import { selectAll } from '../store/modules/pokemonsSlice';
import { useAppDispatch } from '../store/hooks';
import { create } from '../store/modules/pokemonSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ListPokemon: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const pokemonsRedux = useSelector(selectAll).slice(0, 8);

  function handlePokemon(id: number) {
    const pokemon = pokemonsRedux.find(pokemon => pokemon.id === id)!;
    dispatch(create(pokemon));
    navigate('/detail');
  }

  if (!pokemonsRedux.length) {
    return <Typography>Nenhum pokemon para listar</Typography>;
  }

  return (
    <Grid container spacing={4}>
      {pokemonsRedux.map(item => (
        <Grid item xs={12} sm={6} md={3} key={item.id}>
          <Button onClick={() => handlePokemon(item.id)}>
            <CardPokemon pokemon={item} />
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default ListPokemon;
