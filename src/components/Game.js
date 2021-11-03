import React, { useState } from "react";
import HangmanImg from './HangmanImg';
import Controls from './Controls';
import Word from './Word';
import Letters from './Letters';

function Game() {
    const [state, setState] = useState({
        word: "",
        rightLetters: [],
        wrongLetters: [],
        // word: "FAFADE",
        // rightLetters: ['F', 'D'],
        // wrongLetters: ['X', 'Y', 'Z'],
        result: 0 // 0 - no result yet; 1 - win; 2 - lost
    });

    function handleNewLetter(char) {
        var gameOngoing = true;
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
        return gameOngoing;
    }

    function handleNewWord(newWord) {
        setState({
            ...state,
            word: newWord
        })
        console.log("handleNewWord: ");
        console.log(newWord);
    }

    return (
        <div id="hangmandiv">
            <HangmanImg wrongLetters={state.wrongLetters} />
            <Controls gameStarted={(state.word !== "")} onNewLetter={handleNewLetter} onNewWord={handleNewWord} />
            <Word word={state.word} rightLetters={state.rightLetters} />
            <Letters wrongLetters={state.wrongLetters} />
        </div>
    );
}

export default Game;
