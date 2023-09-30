import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../store/hooks';
import colorType from '../utils/ColorType';
import { Paper } from '@mui/material';

const Detail: React.FC = () => {
  const pokemonRedux = useAppSelector(state => state.pokemon);

  const [color, setColor] = useState({ type: 'unknown', card: 'black', chip: 'pink' });

  useEffect(() => {
    const type = pokemonRedux.types[0].type.name;
    const colorFind = colorType.find(item => item.type === type);
    if (colorFind) {
      setColor(colorFind);
    }
  }, []);
  console.log(pokemonRedux);
  return (
    <Paper elevation={0} sx={{ backgroundColor: color.card, textAlign: 'center' }}>
      <img src={pokemonRedux.image} alt={pokemonRedux.name} width={600} />
    </Paper>
  );
};

export default Detail;
