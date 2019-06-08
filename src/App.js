import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class App extends Component {
  state = {
    endpoint: "localhost:8001",
    question:""
  }
  
  render() {
    const socket = socketIOClient(this.state.endpoint)

    socket.on('news', (data) => {
      console.log(data)
    })

    socket.on('question', (info) => {
      console.log(info)
      this.setState({question: info.question.question})
    })

    return(
      <div>
        <p>{this.state.question}</p>
      </div>
    );
  }
}

export default App;
