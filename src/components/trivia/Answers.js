import React, { Component } from 'react';
import Answer from './Answer';

export class Answers extends Component {
    render() {
        if(this.props.answers.length){
            return this.props.answers.slice(1, this.props.answers.length).map((a, index) => (
                <Answer key={index+1} index={index+1} answer={a}/>
            ));
        }
        
        return (<div></div>);
    }
}

export default Answers
