import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

export class Channel extends Component {
    state = {
        endpoint: "localhost:8001/thabuttress",
        question:""
      }

    render() {
        const socket = socketIOClient(this.state.endpoint)

        socket.on('question', (info) => {
            console.log(info)
            this.setState({question: info.question.question})
        })

        return (
            <div>
                <div>
                    <ul>
                        <li key="trivia">Trivia</li>
                        <li key="hangman">Hangman</li>
                    </ul>
                    <h4>Copy Link Before of Channel Overlay</h4>
                    <h5>{window.location.href}/game</h5>
                </div>
            </div>
        )
    }
}

export default Channel
