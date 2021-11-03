import React, { useContext } from "react";
import { GameContext } from "./Game"

function Letters() {
    const {gameCtx} = useContext(GameContext);
    console.log(gameCtx.wrongLetters);
    return (
        <div id="lettersdiv">
            <h2>Letters Not In The Word</h2>
            <div className="letters">L E T R S</div>
        </div>
    );
}

export default Letters;
