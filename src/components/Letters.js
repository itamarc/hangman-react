import React from "react";

function Letters(props) {
    if (props.result === 0) {
        var ltrkey = '';
        return (
        <div id="lettersdiv">
            <h2>Letters Not In The Word</h2>
            {props.wrongLetters.map(ltr => (
                <div key={ltrkey += ltr} className="letternotfound">{ltr}</div>
            ))}
        </div>
        );
    } else if (props.result === 1) {
        return (
        <div id="lettersdiv" className="wondiv"><h3 className="won">You have WON!</h3></div>
        );
    } else {
        return (
        <div id="lettersdiv"><h3>You have lost!</h3></div>
        );
    }
}

export default Letters;
