import React, { useState } from "react";
import LetterForm from "./LetterForm";
import WordForm from "./WordForm";

function Controls(props) {
    const [gameStarted, setGameStarted] = useState(props.gameStarted);

    const submitWord = (newWord) => {
        setGameStarted(true);
        props.onNewWord(newWord);
    }

    const submitLetter = (letter) => {
        setGameStarted(props.onNewLetter(letter));
    }

    return (
        <div id="controls">
            { gameStarted && props.result === 0 ?
            <LetterForm onNewLetter={submitLetter} />
            :
            <WordForm onNewWord={submitWord} />
            }
        </div>
    );
}

export default Controls;
