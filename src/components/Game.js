import React from "react";
import HangmanImg from './HangmanImg';
import Controls from './Controls';
import Word from './Word';
import Letters from './Letters';

class Game extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            word: "",
            letters: [],
        }
    }

    render() {
        return (
        <div>
            <HangmanImg />
            <Controls />
            <Word />
            <Letters />
        </div>
        );
    }
}

export default Game;
