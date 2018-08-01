import React, { Component } from 'react';
import { Paper, Tab, Tabs} from '@material-ui/core';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { year: new Date().getFullYear() };
  }

  render() {
    const { categories } = this.props;
    return (
      <Paper>
        <Tabs
          value={0}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All" /> 
          {categories.map(c =>
            <Tab key={c} label={c} />
          )}
        </Tabs>
      </Paper>
    );
  }
}

export default Footer;