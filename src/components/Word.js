import React, { useContext } from "react";
import { GameContext } from "./Game"

function Word() {
    const {gameCtx} = useContext(GameContext);
    console.log(gameCtx.word)
    console.log(gameCtx.rightLetters);
    return (
        <div id="worddiv">
            <h2>Word</h2>
            <div className="word">W O R D</div>
        </div>
    );
}

export default Word;
