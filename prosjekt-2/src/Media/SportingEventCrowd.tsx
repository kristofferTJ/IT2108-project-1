import React, { Component } from 'react';


class SportingEventCrowd extends Component {
    render() {
        return(
            <audio controls>
                <source src={require("./SportingEventCrowd.wav")} type="audio/wav"></source>
            </audio>
        )
    }
}

export default SportingEventCrowd;