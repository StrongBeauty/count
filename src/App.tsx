import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Display} from "./Display";
import {Button} from "./Button";
import {EntryField} from "./EntryFiled";

export type StatusType = 'Setting' | 'Error' | 'Count'

function App() {
    const [counter, setCounter] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [status, setStatus] = useState<StatusType>('Setting')

    const truValues = startValue >= 0 && maxValue >= 0 && startValue < maxValue

    /*type Button = {
        state: boolean
        title: string
    }*/
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
        debugger
        if (truValues) {
            return setStatus('Setting')
        } else {
            return setStatus('Error')
        }

    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
        if (truValues) {
            return setStatus('Setting')
        } else {
            return setStatus('Error')
        }
    }
    const setButton = () => {
        setStartValue(startValue)
        setMaxValue(maxValue)
        setCounter(startValue)
        setStatus('Count')
    }
    const incButton = () => {
        setCounter(counter+1)//+1
    }
    const resetButton = () => {
        setCounter(startValue)
    }

    useEffect(() => {
        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            setStartValue(newStartValue)
        }
    }, [])

    useEffect(() => {
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))}, [startValue])
    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))}, [maxValue])

    return (
        <div>
            <div className='wrapper'>
                <p className='textSetting'>Start Value</p><EntryField className={truValues ?'input-initial' : 'input-initial-error'} value={startValue} onChange={onChangeStartValue}/>
                <p className='textSetting'>Max Value</p><EntryField className={truValues ?'input-initial' : 'input-initial-error'} value={maxValue} onChange={onChangeMaxValue}/>
                <div>
                    <Button state={truValues}
                     title="set"
                     clickButton={setButton}
                     className='button-set'/>
                </div>
            </div>
            <div className='wrapper'>
                <Display
                    className={ status === 'Setting' ? 'display-text-setting' : status === 'Error' ? 'display-text-error' : counter < maxValue ? 'textDisplay' : 'attentionDisplay'}
                    message={status === 'Error' ? 'Error' : status === 'Setting' ? 'Enter value and press Set' : ''}
                    counter={counter <= maxValue  ? counter : maxValue}
                />
                <div className='display-button' >

                    <Button state={counter < maxValue}
                            title="inc"
                            clickButton={incButton}
                            className='button-inc'/>
                    <Button  state={counter > startValue}
                        title="reset"
                        clickButton={resetButton}
                        className='button-reset'/>
                </div>
            </div>
        </div>
    )
}

export default App;
