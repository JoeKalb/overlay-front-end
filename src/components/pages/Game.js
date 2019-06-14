import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

export class Game extends Component {
    state = {
        channel: "thabuttress",
        endpoint: "localhost:8001/thabuttress",
        gameType: "",
        question:"",
        category:""
    }

    render() {
        const socket = socketIOClient(this.state.endpoint)

        socket.on('triviaStart', (info) => {
            this.setState({
                gameType: 'Trivia'
            })
        })

        socket.on('triviaQuestion', (info) => {
            const { question, category } = info
            this.setState({
                question: question,
                category: category,
                gameType: 'Trivia'
            })
        })

        return (
            <div>
                <h3>{this.state.gameType} {(this.state.category) ? `| ${this.state.category}`: ""}</h3>
                <p>{this.state.question}</p>
            </div>
        )
    }
}

export default Game
