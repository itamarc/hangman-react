import React, { useState } from "react";

function WordForm(props) {
    const [word, setWord] = useState("")

    const onChange = e => {
        setWord(e.target.value.toUpperCase());
    }

    const submitWord = (e) => {
        e.preventDefault();
        if (word.trim() && word.match(/^[A-Za-zÀ-ÿ -]+$/)) {
                props.onNewWord(word);
                setWord("");
        } else {
            alert("Please write a valid word. You can put more than one word if you separate them with a space or a dash.")
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
