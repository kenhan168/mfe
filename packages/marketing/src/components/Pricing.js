import React from 'react';
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

const PricingPage = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Your Brand</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
          Choose the Right Plan for You
        </Typography>
        <Grid container spacing={3}>
          {/* Pricing Plan 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                Basic Plan
              </Typography>
              <Typography variant="h3" align="center" color="primary" gutterBottom>
                $9.99/month
              </Typography>
              <Typography variant="body1" align="center" color="textSecondary" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Button variant="contained" color="primary">
                Get Started
              </Button>
            </Paper>
          </Grid>

          {/* Pricing Plan 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                Standard Plan
              </Typography>
              <Typography variant="h3" align="center" color="primary" gutterBottom>
                $19.99/month
              </Typography>
              <Typography variant="body1" align="center" color="textSecondary" paragraph>
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Button variant="contained" color="primary">
                Get Started
              </Button>
            </Paper>
          </Grid>

          {/* Pricing Plan 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                Premium Plan
              </Typography>
              <Typography variant="h3" align="center" color="primary" gutterBottom>
                $29.99/month
              </Typography>
              <Typography variant="body1" align="center" color="textSecondary" paragraph>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </Typography>
              <Button variant="contained" color="primary">
                Get Started
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PricingPage;
