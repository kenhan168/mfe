import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';

const LandingPage = () => {
  const history = useHistory();

  const handleClick = () => {
    console.log('Button clicked!');
    // Navigate to a specific route
    history.push('/pricing');
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Your Brand</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Grid container spacing={3} style={{ marginTop: '2rem' }}>
          <Grid item xs={12}>
            <Paper
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                Welcome to Your App, this is the Landing page
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Explore the amazing features of our app. Sign up today!
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                <Button variant="contained" color='primary' size="large">
                  Sign Up
                </Button>
                
                <span style={{ marginRight: 10 }} />

                <Button variant="contained" size="large" onClick={handleClick} >
                  Pricing
                </Button>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                Features
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                Discover the powerful features that make our app stand out.
              </Typography>
              {/* Add more feature sections as needed */}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LandingPage;
