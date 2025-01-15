import React from 'react'

function Controlbuttons(props) {
    const StartButton = (
        <div  
            className="w-20 h-12 mb-6 rounded-lg flex justify-center items-center bg-orange-600 border-2 cursor-pointer shadow-xl"
            onClick={props.handleStart}
        >
            Start
        </div>
    )

    const ActiveButtons = (
        <div className="h-24 flex items-center  justify-around">
            <div 
                className="w-20 h-12 rounded-lg flex justify-center items-center bg-orange-600 border-2 cursor-pointer shadow-xl"
                onClick={props.handleReset}
            >
                Reset
            </div>
            <div 
                className="w-20 h-2/4 rounded-lg flex justify-center items-center bg-orange-600 border-2 cursor-pointer shadow-xl"
                onClick={props.handlePauseResume}
            >
                {props.isPaused ? "Resume" : "Pause"}
            </div>
        </div>
    )

    return (
        <div className="m-1 w-full box-border flex items-center justify-center">
            <div>{props.active ? ActiveButtons : StartButton}</div>
        </div>  
    )
}

export default Controlbuttons