// your Bomb code here!
import React from 'react';

class Bomb extends React.Component{

    constructor(props) {
        // debugger
        super()
        this.state = {
            secondsLeft: props.initialCount
        }

    }
    render() {
        // debugger
        if (this.state.secondsLeft > 0){
            return (
                `${this.state.secondsLeft} seconds left before I go boom!`
            )
        } else {
            return `Boom!`
        }
    }
}

export default Bomb