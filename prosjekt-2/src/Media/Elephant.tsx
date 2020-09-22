import React, { Component } from 'react';


class Elephant extends Component {
    render() {
        return(
            <audio controls>
                <source src={require("./Elephant.wav")} type="audio/wav"></source>
            </audio>
        )
    }
}

export default Elephant;