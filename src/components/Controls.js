import React, { useState, useRef } from "react";

function Controls(props) {
    const wordRef = useRef();
    const letterRef = useRef();
    const [gameStarted, setGameStarted] = useState(props.gameStarted);

    const submitWord = (e) => {
        e.preventDefault();
        const newWord = wordRef.current.value;
        setGameStarted(true);
        props.onNewWord(newWord);
    }

    const submitLetter = (e) => {
        e.preventDefault();
        const newLetter = letterRef.current.value;
        props.onNewLetter(newLetter);
    }

    return (
        <div id="controls">
            { gameStarted ?
            <form id="letter-guess" onSubmit={submitLetter}>
                <input name="aLetter" type="text" placeholder="Letter" ref={letterRef} 
                    key="letter" defaultValue="" size="3" maxLength="1"/>
                <button name="guessBtn" className="btn">Guess</button>
            </form>
            :
            <form id="word-start" onSubmit={submitWord}>
                <input name="newWord" type="text" placeholder="Type a word" ref={wordRef} 
                    key="word" defaultValue="" size="15"/>
                <button name="startBtn" className="btn">Start!</button>
            </form>
            }
        </div>
    );
}

export default Controls;
