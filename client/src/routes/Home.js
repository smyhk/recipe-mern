import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

// components
import LeftPane from '../components/LeftPane';
import RightPane from '../components/RightPane';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
}

class Home extends Component {
  render() {
    return (
      <Grid container spacing={8}>
        <Grid item sm>
          <LeftPane styles={styles} />
        </Grid>
        <Grid item sm>
          <RightPane styles={styles} />
        </Grid>
      </Grid>
    );
  }
}

export default Home;
