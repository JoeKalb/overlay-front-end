import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

export class Game extends Component {
    state = {
        channel: "thabuttress",
        endpoint: "localhost:8001/thabuttress",
        gameType: "",
        question:""
    }

    render() {
        const socket = socketIOClient(this.state.endpoint)

        socket.on('triviaStart', (info) => {
            console.log(info)
            this.setState({
                gameType: 'Trivia'
            })
        })

        socket.on('triviaQuestion', (info) => {
            console.log(info)
            this.setState({
                question: info.question.question
            })
        })

        return (
            <div>
                <h3>{this.state.gameType}</h3>
                <p>{this.state.question}</p>
            </div>
        )
    }
}

export default Game
