import { AppBar, Avatar, Box, Container, Grid, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface DefaultLaoutProps {
  component: React.FC;
}

const DefaultLayout: React.FC<DefaultLaoutProps> = ({ component: Component }) => {
  const navigate = useNavigate();
  function backMainPage() {
    navigate('/');
  }

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, marginBottom: '20px' }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={backMainPage}
            >
              <Avatar src="/images/logo-pokeball.png" />
            </IconButton>
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
