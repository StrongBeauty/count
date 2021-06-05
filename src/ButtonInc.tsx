import React from "react";
import './App.css';

type ButtonIncPropsType = {
    // string, number, boolean, () => void
    incButton: () => void
    counter: number
}

export function ButtonInc(props: ButtonIncPropsType) {
    return (
        <button onClick={props.incButton}
                className= 'button-inc'
                disabled={props.counter > 4}>inc</button> )
}