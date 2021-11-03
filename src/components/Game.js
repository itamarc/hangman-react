import React, { createContext } from "react";
import HangmanImg from './HangmanImg';
import Controls from './Controls';
import Word from './Word';
import Letters from './Letters';

export const GameContext = createContext();

var gameCtx = {
    word: "",
    rightLetters: [],
    wrongLetters: []
};

export function Game() {

    function handleNewLetter(char) {
        console.log("handleNewLetter: ");
        if (char === "") {
            console.log("no letter")
            return;
        } else {
            console.log(char);
        }
        // check if the new letter is in the word
        // if it is and it's not on rightLetters
            // show new letter on Word (HOW??)
            // if word complete
                // show "you won" message (HOW??)
                // reset controls state
        // if it's not and it's not on wrongLetters
            // add new letter on Letters (HOW??)
            // show new part on image
            // if last part
                // Show "you lost" message (HOW??)
                // reset controls state
    }

    function handleNewWord(word) {
        gameCtx.word = word;
        console.log("handleNewWord: ");
        console.log(word);
    }

    return (
        <GameContext.Provider value={{gameCtx}}>
        <div id="hangmandiv">
            <HangmanImg  />
            <Controls gameStarted={(gameCtx.word !== "")} onNewLetter={handleNewLetter} onNewWord={handleNewWord} />
            <Word />
            <Letters />
        </div>
        </GameContext.Provider>
    );
}

export default Game;
