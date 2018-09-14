import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default _props => {
  return (
    <AppBar position="static" style={{ marginBottom: 30 }}>
      <Toolbar>
        <Grid container justify="center">
          <Typography variant="display1" color="inherit">
            Try Cloud Firestore
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
