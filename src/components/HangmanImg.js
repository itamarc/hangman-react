import React, { useContext } from "react";
import SVG, { Props as SVGProps } from 'react-inlinesvg';
import { GameContext } from "./Game"

function HangmanImg(props) {
    const {gameCtx} = useContext(GameContext);
    console.log(gameCtx);
    const parts = ['head', 'body', 'left-arm', 'right-arm', 'left-leg', 'right-leg'];
    var nextpart = 0;

    function show(part) {
        document.getElementById(part).style.strokeOpacity = 1;
    }

    function youHaveLost() {
        alert("you have lost");
    }

    function showNextPart() {
        var notLost = true;
        const nextpart = gameCtx.wrongLetters.length + 1;
        show(parts[nextpart]);
        if ((nextpart + 1) === parts.length) {
            youHaveLost();
            notLost = false;
        }
        return notLost;
    }
    
    return (
        <SVG src='./hangman.svg' />
    );
}

export default HangmanImg;
