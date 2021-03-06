import React, { useState } from "react";

function LetterForm(props) {
    const [letter, setLetter] = useState("")

    const onChange = e => {
        setLetter(e.target.value.toUpperCase());
    }

    const submitLetter = (e) => {
        e.preventDefault();
        if (letter.trim() && letter.match(/^[A-Za-zÀ-ÿ]$/)) {
            props.onNewLetter(letter);
            setLetter("");
        } else {
            alert("Please write a letter.")
        }
    }

    return (
            <form onSubmit={submitLetter}>
                <input
                    type="text"
                    placeholder="Letter"
                    size="3"
                    maxLength="1"
                    name="letter"
                    value={letter}
                    onChange={onChange}
                    autoFocus
                />
                <button className="btn">Guess</button>
            </form>
    );
}

export default LetterForm;
