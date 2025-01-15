import React, { useState } from 'react'
import Timer from './Timer';
import Controlbuttons from './Controlbuttons';

function Stopwatch() {
    const [isActive, setActive] = useState(false);
    const [isPaused, setPaused] = useState(true);
    const [time, setTime] = useState(0);

    React.useEffect( ()=>{
        let interval = null;

        if(isActive && isPaused === false){
            interval = setInterval( ()=>{
                setTime((time)=> time + 10);
            }, 10);
        }
        else{
            clearInterval(interval);
        }
        return ()=>{
            clearInterval(interval);
        }
    }, [isActive, isPaused]);

    const handleStart = () => {
        setActive(true);
        setPaused(false);
    }

    const handlePauseResume= () => {
        setPaused(!isPaused);
    }

    const handleReset = () => {
        setActive(false);
        setTime(0);
    }




  return (
    <div className='h-64 w-2/5 bg-gradient-to-b from-teal-400 to-teal-50 flex flex-col items-center justify-between rounded-lg shadow-lg shadow-orange-600/50'>
        <Timer time={time} />
        <Controlbuttons 
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
        />
    </div>
  )
}

export default Stopwatch