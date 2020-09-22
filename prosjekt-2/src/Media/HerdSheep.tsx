import React, { Component } from 'react';


class HerdSheep extends Component {
    render() {
        return(
            <audio controls>
                <source src={require("./HerdSheep.wav")} type="audio/wav"></source>
            </audio>
        )
    }
}

export default HerdSheep;