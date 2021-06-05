import React from "react";
import './App.css';

type ButtonResetPropsType = {
    // string, number, boolean, () => void
    resetButton: () => void
    counter: number
}

export function ButtonReset(props: ButtonResetPropsType) {
    return (
        <button onClick={props.resetButton}
                className='button-reset'
                disabled={props.counter === 0}>reset</button> )}