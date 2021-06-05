import React from "react";
import './App.css';

type DisplayPropsType = {
    counter: number
}

export function Display(props: DisplayPropsType) {
    return <div className='display'><p className={props.counter < 5 ? 'text' : 'attention'}>
        {props.counter <6 ? props.counter : 5}</p></div>
}