import React, {useState} from 'react';
import './App.css';
import {Display} from "./Display";
import {ButtonInc} from "./ButtonInc";
import {ButtonReset} from "./ButtonReset";
import {Button} from "./Button";


function App() {
    let [counter, setCounter] = useState<number>(0)
    /*type Button = {
        state: boolean
        title: string
    }*/
    const incButton = () => {
        setCounter(counter++)//+1
    }
    const resetButton = () => {
        setCounter(0)
    }

    return (
    <div className='wrapper'>
         <Display counter={counter} />
         <div>
             {/*<ButtonInc incButton={incButton} counter={counter} />
             <ButtonReset resetButton={resetButton} counter={counter} />*/}
             <Button state={counter < 5} title="inc" clickButton={incButton} className='button-inc' />
             <Button state={counter > 0} title="reset" clickButton={resetButton} className='button-reset' />
         </div>
    </div>
  );
}

export default App;
