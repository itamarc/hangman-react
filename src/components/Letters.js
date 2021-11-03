import React from "react";

function Letters(props) {
    console.log(props.wrongLetters);
    return (
        <div id="lettersdiv">
            <h2>Letters Not In The Word</h2>
            <div className="letters">{props.wrongLetters}</div>
        </div>
    );
}

export default Letters;
