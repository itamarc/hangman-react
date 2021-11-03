import React from "react";

function Word(props) {
    return (
        <div id="worddiv">
            <h2>Word</h2>
            <div className="word">{props.word}<br/>{props.rightLetters}</div>
        </div>
    );
}

export default Word;
