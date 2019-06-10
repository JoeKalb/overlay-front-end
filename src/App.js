import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Channel from './components/pages/Channel';

class App extends Component {
  state = {
    endpoint: "localhost:8001/thabuttress",
    question:""
  }
  
  render() {
    return(
      <Router>
        <div className="App">
          <div className="container">
            <Navbar />
            <Route exact path="/" component={Home}/>
            <Route path="/thabuttress" component={Channel}/>
            <Route />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
