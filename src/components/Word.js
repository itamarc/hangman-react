import React from "react";
import WordCol from "./WordCol";

function Word(props) {
    const gtc = '1fr '.repeat(props.word.length);
    var ltrkey = '';
    return (
        <div id="worddiv">
            <h2>Word</h2>
            <div id="wordframe" style={{gridTemplateColumns: gtc}}>
                {props.word.split('').map(ltr => (
                    <WordCol key={ltrkey += ltr} letter={ltr} rightLetters={props.rightLetters} result={props.result} />
                ))}
            </div>
        </div>
    );
}

export default Word;
