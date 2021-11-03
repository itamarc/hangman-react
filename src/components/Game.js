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

    function noMissingLetters(rl) {
        var complete = true;
        for (let i = 0; i < state.word.length; i++) {
            if (!rl.includes(state.word.charAt(i))) {
                complete = false;
            }
        }
        return complete;
    }

    function handleNewLetter(letter) {
        var gameOngoing = true;
        if (letter === "") {
            return;
        }
        // check if the new letter is in the word
        // if it is and it's not on rightLetters
        if (state.word.includes(letter) && !state.rightLetters.includes(letter)) {
            // show new letter on Word
            setState({
                ...state,
                rightLetters: [...state.rightLetters, letter]
            });
            // if word complete
            if (noMissingLetters([...state.rightLetters, letter])) {
                // show "you won" message
                setState({
                    word: "",
                    rightLetters: [],
                    wrongLetters: [],
                    result: 1
                });
            }
        }
        // if it's not and it's not on wrongLetters
        if (!state.word.includes(letter) && !state.wrongLetters.includes(letter)) {
            // add new letter on Letters
            setState({
                ...state,
                wrongLetters: [...state.wrongLetters, letter]
            });
            // show new part on image
            // if last part
            if (state.wrongLetters.length+1 >= 6) {
                // Show "you lost" message
                setState({
                    ...state,
                    result: 2
                });
                // reset controls state
            }
        }
        return gameOngoing;
    }

    function handleNewWord(newWord) {
        setState({
            word: newWord,
            rightLetters: [],
            wrongLetters: [],
            result: 0
        });
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
