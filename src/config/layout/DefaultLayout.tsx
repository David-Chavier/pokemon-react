import { AppBar, Avatar, Box, Button, Container, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';

interface DefaultLaoutProps {
  component: React.FC;
}

const DefaultLayout: React.FC<DefaultLaoutProps> = ({ component: Component }) => {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <Avatar src="/images/logoPokebola.jpg" />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container>
        <Grid item xs={12}>
          <Container>
            <Component />
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default DefaultLayout;
