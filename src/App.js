import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Channel from './components/pages/Channel';
import Game from './components/pages/Game';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    channel: "thabuttress",
    endpoint: "localhost:8001/thabuttress",
    question:""
  }

  containerHasPadding = () => {
    let isGame = new RegExp("/game")
    console.log(`containerHasPadding: ${isGame.test(window.location.href)}`)
    return (isGame.test(window.location.href)) ?
      {'padding': '0'} :
      {'padding': '0 1rem'}
  }
  
  render() {
    return(
      <Router>
        <div className="App">
          <div className="container" style={this.containerHasPadding()}>
            <Navbar />
            <Route exact path='/' component={Home}/>
            <Route path='/thabuttress' component={Channel}/>
            <Route path='/thabuttress/game' component={Game}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
