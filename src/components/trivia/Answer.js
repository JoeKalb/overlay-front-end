import React, { Component } from 'react';

export class Answer extends Component {
    render() {
        return (
            <div>
                <p>
                    #{this.props.index}: {this.props.answer}
                </p>
            </div>
        )
    }
}

export default Answer
