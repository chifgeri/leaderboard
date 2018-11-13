import React, { Component } from 'react';
import './App.css';
import LeaderBoard from './leaderboard.js'
import Background from './background.jpg'

class App extends Component {
  render() {
    return (
      <div style={{ height:'100%', backgroundImage: `url(${Background})`,
                    backgroundAttachment: 'fixed',backgroundSize: "cover",
                    overflow:'auto', padding: 0, margin: 0}} >
        <LeaderBoard />
      </div>
    );
  }
}

export default App;
