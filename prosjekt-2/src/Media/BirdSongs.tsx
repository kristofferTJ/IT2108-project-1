import React, { Component } from 'react';


class BirdSongs extends Component {
    render() {
        return(
            <audio controls>
                <source src={require("./BirdSongs.wav")} type="audio/wav"></source>
            </audio>
        )
    }
}

export default BirdSongs;