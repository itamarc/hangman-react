import React from "react";

function Letters(props) {
    console.log(props.wrongLetters);
    if (props.result === 0) {
        return (
        <div id="lettersdiv">
            <h2>Letters Not In The Word</h2>
            <div className="letters">{props.wrongLetters}</div>
        </div>
        );
    } else if (props.result === 1) {
        return (
        <div>WON</div>
        );
    } else {
        return (
        <div>LOST</div>
        );
    }
}

export default Letters;
