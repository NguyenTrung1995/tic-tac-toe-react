import * as React from 'react';
import './App.css';
import GameBoard from './GameBoard';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <GameBoard />
      </div>
    );
  }
}

export default App;
