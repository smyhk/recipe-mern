import React, { Component } from 'react';
import { Paper } from '@material-ui/core';

class RightPane extends Component {
  render() {
    const { styles } = this.props;
    return (
      <Paper style={styles.Paper}>
        Right Pane
      </Paper>
    );
  }
}

export default RightPane;