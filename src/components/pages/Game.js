import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import Answers from '../trivia/Answers';

export class Game extends Component {
    state = {
        channel: "thabuttress",
        endpoint: "localhost:8001/thabuttress",
        gameType: "",
        question:"",
        category:"",
        formatted :[]
    }

    componentDidMount() {
        fetch(`http://localhost:8001/game/${this.state.channel}`)
            .then(res => res.json())
            .then(json => {
                if(json.hasOwnProperty('game')){
                    const { game } = json
                    const { question } = game
                    this.setState({
                        gameType: game.type,
                        category: (question.category) ? question.category : "",
                        question: (question.question) ? question.question : "",
                        formatted: (question.formatted) ? question.formatted: []                    })
                }
            })
    }

    render() {
        const socket = socketIOClient(this.state.endpoint)

        socket.on('triviaStart', (info) => {
            this.setState({
                gameType: 'Trivia',
                category:info.category
            })
        })

        socket.on('triviaQuestion', (info) => {
            const { question, category, formatted } = info
            this.setState({
                question: question,
                category: category,
                gameType: 'Trivia',
                formatted: formatted
            })
        })

        return (
            <div>
                <h3>{this.state.gameType} {(this.state.category) ? `| ${this.state.category}`: ""}</h3>
                <p>{this.state.question}</p>
                <Answers answers={this.state.formatted}/>
            </div>
        )
    }
}

export default Game
