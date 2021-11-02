import React from "react";
import SVG, { Props as SVGProps } from 'react-inlinesvg';

class HangmanImg extends React.Component {
    render() {
        return (
            <div className="hangman">
                <SVG src='./hangman.svg' />
            </div>
        );
    }
}

export default HangmanImg;
