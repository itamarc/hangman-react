import React, { useState } from "react";

function WordForm(props) {
    const [word, setWord] = useState("")

    const onChange = e => {
        setWord(e.target.value.toUpperCase());
    }

    const submitWord = (e) => {
        e.preventDefault();
        if (word.trim()) {
            props.onNewWord(word);
            setWord("");
        } else {
            alert("Please write a word.")
        }
    }

    return (
            <form onSubmit={submitWord}>
                <input
                    type="text"
                    placeholder="Type a word"
                    size="15"
                    name="word"
                    value={word}
                    onChange={onChange}
                    autoFocus
                />
                <button className="btn">Start!</button>
            </form>
    );
}

export default WordForm;
