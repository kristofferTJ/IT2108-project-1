import React, { Component } from 'react';


class OfficeSounds extends Component {
    render() {
        return(
            <audio controls>
                <source src={require("./OfficeSounds.wav")} type="audio/wav"></source>
            </audio>
        )
    }
}

export default OfficeSounds;