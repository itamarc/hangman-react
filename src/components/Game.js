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

    function noMissingLetters() {
        var complete = true;
        for (let i = 0; i < state.word.length; i++) {
            if (!state.rightLetters.includes(state.word.charAt(i))) {
                complete = false;
            }
            console.log(state.word.charAt(i));
        }
        console.log(complete);
        return complete;
    }

    function handleNewLetter(letter) {
        var gameOngoing = true;
        console.log("handleNewLetter: ");
        if (letter === "") {
            console.log("no letter")
            return;
        } else {
            console.log(letter);
        }
        // check if the new letter is in the word
        // if it is and it's not on rightLetters
        if (state.word.includes(letter) && !state.rightLetters.includes(letter)) {
            // show new letter on Word (HOW??)
            setState({
                ...state,
                rightLetters: [...state.rightLetters, letter]
            });
            // if word complete
            if (noMissingLetters()) {
                // show "you won" message (HOW??)
                setState({
                    ...state,
                    result: 1
                });
            }
        }
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
            <Controls gameStarted={(state.word !== "")} onNewLetter={handleNewLetter} onNewWord={handleNewWord} result={state.result} />
            <Word word={state.word} rightLetters={state.rightLetters} result={state.result} />
            <Letters wrongLetters={state.wrongLetters} result={state.result} />
        </div>
    );
}

export default Game;
