import React from "react";

function WordCol(props) {
    if (props.letter === " ") {
        return (
            <div className="spacecol"></div>
        );
    } else if (props.letter === "-") {
        return (
            <div className="spacecol">-</div>
        );
    } else if (props.rightLetters.includes(props.letter)) {
        return (
            <div className="wordcol">{props.letterOriginal}</div>
        );
    } else if (props.result === 2) {
        return (
            <div className="wordcol missedletter">{props.letterOriginal}</div>
        );
    } else {
        return (
            <div className="wordcol">&nbsp;</div>
        );
    }
}

export default WordCol
