import React, { Component } from 'react';
import './App.css';
import LeaderBoard from './leaderboard.js'
import Background from './logo_kszk.png'

class App extends Component {
  render() {
    return (
      <div style={{ backgroundImage: `url(${Background})`}}>
      <LeaderBoard />
      </div>
    );
  }
}

export default App;
