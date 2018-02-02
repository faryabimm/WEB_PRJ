import React, { Component } from 'react';
import Grid from './grid/grid';
import Dice from './dice/dice'
class App extends Component {
  render() {
    return (
        <div className="flex-row-container">
            <Grid/>
            <Dice/>
        </div>
    );
  }


}

export default App;
