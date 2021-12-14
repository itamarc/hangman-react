import React from "react";
import { SvgLoader, SvgProxy } from 'react-svgmt';

function HangmanImg(props) {
    const parts = ['head', 'body', 'left-arm', 'right-arm', 'left-leg', 'right-leg'];
    const partsShown = parts.slice(0, props.wrongLetters.length);
    const svgpath = window.location.href.replace(window.location.origin, '') + '/hangman.svg';

    function show(part) {
        part.style.strokeOpacity = 1;
    }

    function hide(part) {
        part.style.strokeOpacity = 0;
    }
    
    if (props.wrongLetters.length === 0){
        return (
            <>
            <SvgLoader path={svgpath}>
                {parts.map(part => (
                <SvgProxy
                    key={part}
                    selector={'#'+part}
                    onElementSelected={hide}
                />
                ))}
            </SvgLoader>
            </>
        );
    } else {
        var lastsel = "#" + partsShown[partsShown.length-1];
        console.log(lastsel);
        return (
            <>
            <SvgLoader path={svgpath}>
                <SvgProxy
                    selector={lastsel}
                    onElementSelected={show}
                />
            </SvgLoader>
            </>
        );
    }
}

export default HangmanImg;
