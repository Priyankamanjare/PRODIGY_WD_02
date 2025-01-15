
import React from 'react'

export default Timer

function Timer(props) {
  const minutes = Math.floor((props.time / 60000) % 60);
  const seconds = Math.floor((props.time / 1000) % 60);
  const milliseconds = Math.floor((props.time / 10) % 100);

  return (
    <div className='w-48 h-24 mt-2 flex items-center justify-center border-2 rounded-lg  shadow-2xl  '>
        {minutes > 0 && (
          <>
            <span className='text-2xl font-semibold text-black mr-1'>
              {("0" + minutes).slice(-2)}:
            </span>
          </>
        )}
        <span className='text-2xl font-semibold text-black'>
          {("0" + seconds).slice(-2)}.
        </span>
        <span className='text-2xl font-semibold text-black ml-1'>
          {("0" + milliseconds).slice(-2)}
        </span>
    </div>
  )
}

