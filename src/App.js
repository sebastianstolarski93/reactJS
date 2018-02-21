import React, { Component } from 'react';
import './App.css';
import Coin from "./components/CoinList/Coin/Coin";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Coin></Coin>
      </div>
    );
  }
}

export default App;