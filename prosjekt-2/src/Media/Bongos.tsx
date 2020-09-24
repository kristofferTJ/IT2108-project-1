import React, { Component } from 'react';


class Bongos extends Component {
    render() {
        return(
            <audio controls>
                <source src={require("./Bongos.wav")} type="audio/wav"></source>
            </audio>
        )
    }
}

export default Bongos;