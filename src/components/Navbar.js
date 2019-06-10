import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    isVisible = () =>{
        let isGame = new RegExp("/game/")
        return (isGame.test(window.location.href)) ?
            {'visibility':"hidden"} :
            {'visibility':"visible"}
    }

    render() {
        return (
            <header style={this.isVisible()}>
                <h1>BotFish5 Visual</h1>
                <Link to="/">Home</Link>
                <button style={buttonStyle}>LOGIN</button>
            </header>
        )
    }
}

const buttonStyle = {
    color: "#fff",
    background: "purple"
}

export default Navbar
