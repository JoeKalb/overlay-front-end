import React, { Component } from 'react';

export class Channel extends Component {
    state = {
        channel: "thabuttress",
        endpoint: "localhost:8001/thabuttress",
        question:""
      }

      isGamePage = () => {
        let isGame = new RegExp("/game")
        return (isGame.test(window.location.href)) ?
            {'display':"none"} :
            {'display':"block"}
      }

      gameChannel = () => {
          return `${window.location.href}/game`
      }

    render() {
        return (
            <div style={this.isGamePage()}>
                <div>
                    <ul>
                        <li key="trivia">Trivia</li>
                        <li key="hangman">Hangman</li>
                    </ul>
                    <h4>Channel Overlay Link</h4>
                    <a target="_blank" rel="noopener noreferrer" href={this.gameChannel()}>{window.location.href}/game</a>
                </div>
            </div>
        )
    }
}

export default Channel
