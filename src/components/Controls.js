import React from "react";

class Controls extends React.Component {
    render() {
        return (
            <div className="controls">
                <span id="word-start">
                    <input name="newWord" type="text" placeholder="Type a word"/>
                    <button name="startBtn">Start!</button>
                </span>
                <span id="letter-guess">
                    <input name="aLetter" type="text" placeholder="Letter"/>
                    <button name="guessBtn">Guess</button>
                </span>
            </div>
        );
    }
}

export default Controls;
